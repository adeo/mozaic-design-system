let postcss = require('postcss')

let plugin = require('./')

async function run(input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('prepend content', async () => {
  await run(
    `.test-content {
  background: #ffffff;
  color: #000000;
  font-size: 12px;
}`,
    `$customVariable: development;
.test-content {
  background: #ffffff;
  color: #000000;
  font-size: 12px;
}`,
    '$customVariable: development;'
  )
})
