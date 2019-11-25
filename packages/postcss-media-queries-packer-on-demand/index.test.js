import 'babel-polyfill'
let postcss = require('postcss')

let plugin = require('./')

async function run(input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  //console.log(result.css)

  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('regroup media queries between comments', async () => {
  await run(
    `/* mqp:start */
.tata {
  color: blue;
}
@media (min-width: 1024px) {
  .tata {
    color: blue;
  }
}
.toto {
  color: blue;
}
@media (min-width: 1024px) {
  .toto {
    color: blue;
  }
}
/* mqp:end */`,
    `.tata {
  color: blue;
}
.toto {
  color: blue;
}
@media (min-width: 1024px) {
  .tata {
    color: blue;
  }
  .toto {
    color: blue;
  }
}`,
    {}
  )
})

it('should not regroup media queries outside of comments', async () => {
  await run(
    `/* mqp:start */
.tata {
  color: blue
}
@media (min-width: 1024px) {
  .tata {
    color: blue
  }
}
.toto {
  color: blue
}
@media (min-width: 1024px) {
  .toto {
    color: blue
  }
}
/* mqp:end */
.titi {
  color: blue
}
@media (min-width: 1024px) {
  .titi {
    color: blue
  }
}`,
    `.tata {
  color: blue
}
.toto {
  color: blue
}
@media (min-width: 1024px) {
  .tata {
    color: blue
  }
  .toto {
    color: blue
  }
}
.titi {
  color: blue
}
@media (min-width: 1024px) {
  .titi {
    color: blue
  }
}`,
    {}
  )
})

it('should regroup media queries by order of appearence', async () => {
  await run(
    `/* mqp:start */
.tata {
  color: blue
}
@media (min-width: 320px) {
  .tata {
    color: blue
  }
}
@media (min-width: 680px) {
  .toto {
    color: blue
  }
}
@media (min-width: 320px) {
  .toto {
    color: blue
  }
}
@media (min-width: 1024px) {
  .toto {
    color: blue
  }
}
/* mqp:end */`,
    `.tata {
  color: blue
}
@media (min-width: 320px) {
  .tata {
    color: blue
  }
  .toto {
    color: blue
  }
}
@media (min-width: 680px) {
  .toto {
    color: blue
  }
}
@media (min-width: 1024px) {
  .toto {
    color: blue
  }
}`,
    {}
  )
})

it('should restart group after finding a new start comment', async () => {
  await run(
    `/* mqp:start */
.tata {
  color: blue
}
@media (min-width: 320px) {}
@media (min-width: 320px) {}
@media (min-width: 1024px) {}
/* mqp:end */
/* mqp:start */
.tata {
  color: blue
}
@media (min-width: 320px) {}
@media (min-width: 320px) {}
@media (min-width: 1024px) {}
/* mqp:end */`,
    `.tata {
  color: blue
}
@media (min-width: 320px) {}
@media (min-width: 1024px) {}
.tata {
  color: blue
}
@media (min-width: 320px) {}
@media (min-width: 1024px) {}`,
    {}
  )
})

it('should sort media queries by size', async () => {
  await run(
    `/* mqp:start */
.tata {
  color: blue
}
@media (min-width: 680px) {}
@media (min-width: 320px) {}
@media (min-width: 1024px) {}
/* mqp:end */`,
    `.tata {
  color: blue
}
@media (min-width: 320px) {}
@media (min-width: 680px) {}
@media (min-width: 1024px) {}`,
    { sort: true }
  )
})
