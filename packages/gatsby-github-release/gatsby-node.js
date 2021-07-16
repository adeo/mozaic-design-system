require('dotenv').config()
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

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
  const response = await fetch('https://api.github.com/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GH_API_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  })

  const data = await response.json()

  const version = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'lerna.json'))
  )

  const tags = data.data.repository.releases.nodes

  tags.forEach((tag) => {
    const { tagName, publishedAt, descriptionHTML } = tag

    let nodeId = createNodeId(`github-release-${tagName}`)
    let nodeData = Object.assign(
      {},
      { tagName, publishedAt },
      {
        id: nodeId,
        tagName,
        isCurrent: tagName === `v${version.version}` ? true : false,
        publishedAt,
        descriptionHTML,
        url:
          'https://' +
          tagName.replace(/\.|-/g, '') +
          '-dot-mozaic-design-system-dtrp.appspot.com',
        internal: {
          type: `GithubRelease`,
          content: JSON.stringify({ tagName }),
          contentDigest: createContentDigest({ tagName }),
        },
      }
    )

    createNode(nodeData)
  })

  return
}
