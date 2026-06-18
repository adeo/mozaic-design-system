require('dotenv').config()
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type GithubRelease implements Node @dontInfer {
      tagName: String!
      isCurrent: Boolean!
      publishedAt: Date @dateformat
      descriptionHTML: String
      url: String
    }
  `)
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const { createNode } = actions
  const warn = (message) => {
    if (reporter && typeof reporter.warn === 'function') {
      reporter.warn(message)
      return
    }

    console.warn(message)
  }

  const version = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'lerna.json'), 'utf-8')
  )

  const createReleaseNode = ({
    tagName,
    publishedAt,
    descriptionHTML,
    isCurrent,
    url,
  }) => {
    const nodeId = createNodeId(`github-release-${tagName}`)
    const nodeData = {
      id: nodeId,
      tagName,
      isCurrent,
      publishedAt,
      descriptionHTML,
      url,
      internal: {
        type: `GithubRelease`,
        content: JSON.stringify({ tagName }),
        contentDigest: createContentDigest({
          tagName,
          isCurrent,
          publishedAt,
          descriptionHTML,
          url,
        }),
      },
    }

    createNode(nodeData)
  }

  const createFallbackCurrentRelease = () => {
    const tagName = `v${version.version}`

    createReleaseNode({
      tagName,
      isCurrent: true,
      publishedAt: new Date(0).toISOString(),
      descriptionHTML: '',
      url: 'https://mozaic.adeo.cloud/',
    })
  }

  if (!process.env.GH_API_TOKEN) {
    warn(
      '[gatsby-github-release] GH_API_TOKEN is not set, skipping GitHub releases sourcing.'
    )
    createFallbackCurrentRelease()
    return
  }

  const query = `
        query {
            repository(owner: "adeo", name: "mozaic-design-system") {
            releases (first:100,  orderBy: {field: CREATED_AT, direction: DESC}) {
                totalCount
                nodes{
                    tagName
                    publishedAt
                    descriptionHTML
                }
            }
        }
    }
    `
  let data

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GH_API_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    })

    data = await response.json()
  } catch (error) {
    warn(
      `[gatsby-github-release] Unable to fetch GitHub releases, skipping. ${error.message}`
    )
    return
  }

  const tags = data?.data?.repository?.releases?.nodes

  if (!Array.isArray(tags)) {
    const details = data?.errors
      ? ` ${data.errors.map(({ message }) => message).join(' | ')}`
      : ''

    warn(
      `[gatsby-github-release] GitHub response does not contain releases, skipping.${details}`
    )
    createFallbackCurrentRelease()
    return
  }

  if (tags.length === 0) {
    createFallbackCurrentRelease()
    return
  }

  tags.forEach((tag) => {
    const { tagName, publishedAt, descriptionHTML } = tag

    createReleaseNode({
      tagName,
      isCurrent: tagName === `v${version.version}`,
      publishedAt,
      descriptionHTML,
      url:
        'https://' +
        tagName.replace(/\.|-/g, '') +
        '-dot-mozaic-design-system-dtrp.appspot.com',
    })
  })

  return
}
