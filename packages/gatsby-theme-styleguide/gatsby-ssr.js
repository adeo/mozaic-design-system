/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require('react')

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      src="https://embed.small.chat/T4R6RCZFAG0182TS10L8.js"
      async
    ></script>,
  ])
}
