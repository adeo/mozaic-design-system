const dirTree = require('directory-tree');
const fs = require('fs');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest, createParentChildLink }, configOptions) => {

    const { createNode } = actions
    const tree = dirTree(configOptions.path);
    // Gatsby adds a configOption that's not needed for this plugin, delete it
    delete configOptions.plugins
    let patterns = {};
    const processDirectoryTree = (tree) => {
        if (tree.path.includes('pattern')) {
            const naming = tree.path.split('.');
            const content = fs.readFileSync(tree.path, 'utf8');

            if (patterns[naming[0]] === undefined) {
                patterns[naming[0]] = {};
            }
            patterns[naming[0]][naming[2]] = content;
        }


        if (Array.isArray(tree.children)) {
            tree.children.forEach((child) => processDirectoryTree(child));
        }
    }

    processDirectoryTree(tree);

    Object.keys(patterns).map((key) => {
        const value = patterns[key];

        const nodeId = createNodeId(`pattern-${key}`);
        let nodeData = Object.assign({}, value, {
            'id': nodeId,
            path: key,
            ...value,
            'internal': {
                'type': `Pattern`,
                'content': JSON.stringify(value),
                'contentDigest': createContentDigest(value),
            }
        });

        createNode(nodeData);
    });

}