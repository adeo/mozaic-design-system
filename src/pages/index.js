import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../gatsby-components/layout'

const IndexPage = ({ data }) => {
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

        <h3>Our Philosophy :</h3>
        <p>We now that each BU face different challenges, that's why we want the design system to be :</p>

        <h4>Extensible, a two way street</h4>
        <p>
          At the same time you are using global Design and CSS patterns (design assets,
          documentations, mixins, functions, linters and sketch files) to make your life easier, when you discover potential evolutions
          on those patterns, you can submit it to the community so everyone can leverage your team skills and evolve their own projects
          with your design and code.
        </p>

        <h4>Modular, light weight</h4>
        <p>
          Take just what you need, live the rest.
          You can import the whole project or only the patterns you need. It's possible, for example, to use just our grids, buttons and colors,
          and keep your own set of icons.
          We will make sure that what you use will play well with your existing code bases.
        </p>

        <h4>Customizable, play as you want</h4>
        <p>
          Make any peace your own, change it, tweak it. You can override anything, change tokens values, override CSS and such.
          Let's say you're workin at Zôdio and you'd like to start using this design system but... "damn, it's all green-ish".
          All you have to do it's update the color tokens and it's done. All elements will follow your new collor pallete. 
          Magic? No it's just... magic! :p
        </p>
      </div>
      <hr />
      <div>
        <h4>Developers, here's our github repo</h4>
        <a href="https://github.com/adeo/design-system--styleguide">link to github</a>
        <p>
          It's worth to mention that this is a living system, still in it's earliest stages. So, bare with us for a little and this will be something great in no time... at least, we expect! :)
          You can report any bug or request a feature or improvment <a href="">filling an issue here</a>
        </p>

        <h4>Designers</h4>
        <p>A great onboarding and documentation for you is comming. For now, you can follow us on the <a href="https://adeo-tech-community.slack.com/messages/CF7TJ87DL/apps/A0F7YS2SX/">slack channel</a></p>
      </div>

      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
            fileName {
              name
              base
              relativePath
              extension
            }
          }
          excerpt
        }
      }
    }
  }
`
