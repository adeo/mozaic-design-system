import { createRequire } from 'module'
import { basename } from 'path'
import { createFilePath } from 'gatsby-source-filesystem'
const require = createRequire(import.meta.url)

const colorsTokensLM =
  require('@mozaic-ds/tokens/build/js/tokensObject.js').color
const colorsTokensAdeo =
  require('@mozaic-ds/tokens/buildAdeo/js/tokensObject.js').color

export const onCreateNode = ({ node, getNode, actions, reporter }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `docs` })
    const fileName = basename(node.internal.contentFilePath)

    const keywords = `${slug.split('/').join(', ')}, ${
      node.frontmatter.searchKeywords
    }`

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({
      node,
      name: `keywords`,
      value: keywords,
    })

    createNodeField({
      node,
      name: `fileName`,
      value: fileName,
    })
  }
}

/**
 * Add Mozaic Colors to GraphQL
 */

export const sourceNodes = async (gatsbyApi) => {
  function createTokensColorNode(colorsTokens, nodeName) {
    Object.keys(colorsTokens).map((tokens) => {
      if (
        [100] in colorsTokens[tokens] ||
        'primary-01' in colorsTokens[tokens]
      ) {
        const nodeData = Object.assign(
          {},
          {
            colors: JSON.stringify(colorsTokens[tokens]),
            id: gatsbyApi.createNodeId(`${tokens}${nodeName}`),
            internal: {
              type: `${nodeName}`,
              contentDigest: gatsbyApi.createContentDigest(
                colorsTokens[tokens],
              ),
            },
            name: tokens,
          },
        )

        gatsbyApi.actions.createNode(nodeData)
      }
    })
  }

  createTokensColorNode(colorsTokensLM, 'ColorLM')
  createTokensColorNode(colorsTokensAdeo, 'ColorAdeo')
}
