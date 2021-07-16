module.exports = (plop) => {
  // controller generator
  plop.setGenerator('pattern', {
    description: 'create a new pattern',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'what is the pattern name please',
      },
      {
        type: 'input',
        name: 'path',
        message:
          'where do you want to add the pattern (from the pages directory)',
      },
      {
        type: 'input',
        name: 'order',
        message: "witch item's order (integer)",
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/docs/{{path}}/{{name}}',
        templateFiles: 'plop-templates/pattern/**/*',
        base: 'plop-templates/pattern/',
      },
    ],
  })
}
