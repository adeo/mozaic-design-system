import * as React from 'react'

// Useful links:
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/

const HeadComponents = [
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-36LEF1V8XB"
  ></script>,
  <script
    key="ga_config"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-36LEF1V8XB');
      `,
    }}
  />,
]

const BodyComponents = [
  <script async src="https://embed.small.chat/T4R6RCZFAG0182TS10L8.js"></script>,
]

const onRenderBody = (gatsbyApi) => {
  const { setHeadComponents, setPostBodyComponents } = gatsbyApi
  setHeadComponents(HeadComponents)
  setPostBodyComponents(BodyComponents)
}

export { onRenderBody }
