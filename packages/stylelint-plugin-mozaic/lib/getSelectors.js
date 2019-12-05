const stylelint = require('stylelint');
const resolveNestedSelector = require('postcss-resolve-nested-selector');
const parseSelector = require('postcss-selector-parser');

const selector = (rule, result) => {
    const selector = rule.selector;
    const selectorDef = [];

    resolveNestedSelector(selector, rule).forEach((selectorB) => {
        try {
            parseSelector((parsedSelector) => {
                parsedSelector.each((selectorNode) => {
                    selectorNode.walk((s) => {
                        selectorDef.push({
                            value: s.value,
                            type: s.type
                        });
                    });
                });
            }).process(selectorB);
        } catch (e) {
            result.warn('Cannot parse selector', {});
        }
    });

    return selectorDef;
};

module.exports = selector;
