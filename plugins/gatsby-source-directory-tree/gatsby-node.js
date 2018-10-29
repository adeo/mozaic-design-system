const dirTree = require('directory-tree');


exports.sourceNodes = ({ actions, createNodeId, createContentDigest, createParentChildLink }, configOptions) => {

    const { createNode } = actions

    // Gatsby adds a configOption that's not needed for this plugin, delete it
    delete configOptions.plugins
    const tree = dirTree(configOptions.path);


    const processDirectoryTree = (tree, parentNode) => {
        const nodeId = createNodeId(`directory-tree-${tree.path}`)

        const { path, name, size, type } = tree;
        let childrenNode = [];

        let nodeData = Object.assign({}, { path, name, size, type }, {
            'id': nodeId,
            parentNode,
            path,
            name,
            size,
            type,
            childrenNode,
            'internal': {
                'type': `DirectoryTree`,
                'content': JSON.stringify({ path, name, size, type }),
                'contentDigest': createContentDigest({ path, name, size, type }),
            }
        });

        if (tree.children) {
            childrenNode = processChildren(tree.children, nodeData);
            nodeData.childrenNode = childrenNode;
        }

        return nodeData;
    }

    const processChildren = (children, parentNode) => {
        let childrenNodes = [];
        children.forEach(element => {
            const nodeData = processDirectoryTree(element, parentNode);
            createNode(nodeData);

            const { path, name, size, type, id, childrenNode } = nodeData;
            childrenNodes.push({ path, name, size, type, id, childrenNode });
        });

        return childrenNodes;
    }

    const nodeData = processDirectoryTree(tree);

    createNode(nodeData);
}

