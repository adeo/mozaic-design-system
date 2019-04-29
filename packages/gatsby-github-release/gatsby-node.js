const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')

console.log('load github release')

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  const query = `
        query {
            repository(owner: "adeo", name: "design-system--styleguide") {
            releases (first:100,  orderBy: {field: CREATED_AT, direction: DESC}) {
                totalCount
                nodes{
                    tagName
                    publishedAt
                }
            }
        }
    }
    `
  console.log('github release before fetch')
  const response = await fetch('https://api.github.com/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 66792a1df6e0dd6345b461535cb37b40961b4439',
    },
    body: JSON.stringify({ query }),
  })

  const data = await response.json()

  console.log('github release response')

  const version = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'package.json'))
  )

  const tags = data.data.repository.releases.nodes

  tags.forEach(tag => {
    const { tagName, publishedAt } = tag

    let nodeId = createNodeId(`github-release-${tagName}`)
    let nodeData = Object.assign(
      {},
      { tagName, publishedAt },
      {
        id: nodeId,
        tagName,
        isCurrent: tagName === `v${version.version}` ? true : false,
        publishedAt,
        url:
          'https://' +
          tagName.replace(/\./g, '') +
          '-dot-design-system-adeo.appspot.com',
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
