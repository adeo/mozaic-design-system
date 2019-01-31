import React from 'react'
import Layout from '../gatsby-components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>MultiBU Design System</h1>
        <p>
          Hello, welcome to our Design System MultiBU yeah, that's a poor name we came up with just for the sake of calling it something else than design system, you can help us on finding a new name on our slack channel.
          <br />
          With a modular approch, we intend to serve ADEO with a flexbile design system that allows Business Units to develop it's digital products. All our design principles, rules and conventions are listed here as well as everything you need to have consistent interactions up and running for real humans to use. 
        </p>
        <hr />
      <div>
        <h2>The goal is to provide a tool that helps digital teams from Business Units to :</h2>
        <ul>
          <li>Design and Develop new interactions faster by providing ready-made reusable building blocks;</li>
          <li>Consume tested patterns regarding accessibility, browser compatibility and usability;</li>
          <li>Respect brand identity creating consistency across projects and platforms</li>
          <li>Learn discoveries about new interactions, and test insights from other Business Units</li>
          <li>Promoting the Innersource approach on our tech community</li>
        </ul>

        <h3>Our Philosophy:</h3>
        <p>We now that each BU face different challenges, that's why we want the design system to be :</p>

        <h4>Extensible</h4>
        <p>
          You don't have only the ready components, but you have the tools to build components faster. (design assets,
          documentations, mixins, functions, linters and sketch files)
        </p>

        <h4>Modular</h4>
        <p>
          Take just what you need, live the rest.
          You can import the whole project or only the patterns you need. It's possible, for example, to use just our grids, buttons and colors,
          and keep your own set of icons.
          We will make sure that what you use will play well with your existing code bases.
        </p>

        <h4>Customizable</h4>
        <p>
          If you need another color scheme, override it locally, and use it in your project
        </p>
      </div>
      <hr />
      <div>
        <h4>Developers, here's our github repo</h4>
        <a href="https://github.com/adeo/design-system--styleguide">link to github</a>
        <p>
          It's worth to mention that this is a living system, still in it's earliest stages. So, bare with us for a little and this will be something great in no time... at least, we expect! :)
          You can report any bug or request a feature or improvment <a href="https://github.com/adeo/design-system--styleguide/issues/new/choose">filling an issue here</a>
        </p>

        <h4>Designers</h4>
        <p>A great onboarding and documentation for you is comming. For now, you can follow us on the <a href="https://adeo-tech-community.slack.com/messages/CF7TJ87DL/apps/A0F7YS2SX/">slack channel</a></p>
      </div>

      </div>
    </Layout>
  )
}

export default IndexPage