import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../gatsby-components/layout'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>MultiBU Design System</h1>
      <p>
        Hello, welcome to our Design System MultiBU yeah, that's a poor name we came up with just for the sake of calling it something else than design system, you can help us on finding a new name on our slack channel. With a modular approch, we intend to serve ADEO with a flexbile design system that allows Business Units to develop it's digital products. 
All our design principles, rules and conventions are listed here as well as everything you need to have consistent interactions up and running for real humans to use. 
</p>
<h2>The goal is to help teams on focusing more on creating interaction to solve outcomes than designing pretty features.</h2>
<p>
It's worth to mention that this is a living system, still in it's earliest stages. So, bare with us for a little and this will be something great in no time... at least, we expect! :)
You can report any bug or request a feature or improvment <a href="">filling an issue here</a>
</p>
<h4>Developers, here's our github repo</h4>
<a href="https://github.com/adeo/design-system--styleguide">link to github</a>
<h4>Designers</h4>
<p>A great onboarding and documentation for you is comming. For now, you can follow us on the <a href="https://adeo-tech-community.slack.com/messages/CF7TJ87DL/apps/A0F7YS2SX/">slack channel</a></p>
      <hr />
      <h3>Usefull links</h3>

      <ul />
      {data.allMarkdownRemark.edges.map(({ node }, i) => (
        <li key={`line-${i}`}>
          <Link to={node.fields.slug}>
            {node.frontmatter.title} / {node.fields.dirName}
          </Link>
        </li>
      ))}
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
