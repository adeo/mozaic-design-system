import * as React from 'react'

const BodyComponents = [
  <script
    src="https://embed.small.chat/T4R6RCZFAG0182TS10L8.js"
    async
  ></script>,
]

const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents(BodyComponents)
}

export { onRenderBody }
