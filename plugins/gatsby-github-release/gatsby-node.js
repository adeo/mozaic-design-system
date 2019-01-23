const fetch = require('node-fetch');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions

    const query = `
        query {
            repository(owner: "adeo", name: "design-system--styleguide") {
            releases (first:100) {
                totalCount
                nodes{
                    tagName
                }
            }
        }
    }
    `

    const response = await fetch('https://api.github.com/graphql', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 66792a1df6e0dd6345b461535cb37b40961b4439'
        },
        body: JSON.stringify({ query })
    })

    const data = await response.json();

    const tags = data.data.repository.releases.nodes;

    tags.forEach(tag => {
        const { tagName } = tag;

        let nodeId = createNodeId(`github-release-${tagName}`);
        let nodeData = Object.assign({}, { tagName }, {
            'id': nodeId,
            tagName,
            'url': 'https://' + tagName.replace(/\./g, '') + '-dot-design-system-adeo.appspot.com',
            'internal': {
                'type': `GithubRelease`,
                'content': JSON.stringify({ tagName }),
                'contentDigest': createContentDigest({ tagName }),
            }
        });

        createNode(nodeData);
    })


    return
}