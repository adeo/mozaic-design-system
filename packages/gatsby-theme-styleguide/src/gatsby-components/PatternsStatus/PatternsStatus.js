import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PatternStatusFlagBox from './PatternStatusFlagBox'

import './patternsstatusflags.scss'

const PatternsStatus = props => {
  const {
    data: {
      allMdx: { edges },
    },
  } = props

  const titles = ['Sketch', 'Figma', 'SCSS', 'vue', 'react', 'angular']

  const tblHeaders = titles.map(title => <th key={'th_' + title}>{title}</th>)

  // adding the "Pattern" title
  tblHeaders.unshift(<th key="th_pattern">pattern</th>)

  const tblRows = edges
    .filter(elem => !!elem.node.frontmatter.status)
    .map((elem, index) => {
      const { title, status } = elem.node.frontmatter

      // creating cells of values
      const statuses = titles.map(header => {
        const statusValue = status[header.toLowerCase()]
        let val = <span>x</span>
        if (statusValue) {
          val = <PatternStatusFlagBox value={statusValue} />
        }
        return <td key={'value_' + header + '_' + title}>{val}</td>
      })

      // cell of the "pattern" (Button|Checkbox|etc)
      statuses.unshift(<td key={'pattern_' + index}>{title}</td>)
      return <tr key={'value_row_' + index}>{statuses}</tr>
    })

  return (
    <div>
      <table>
        <thead>
          <tr>{tblHeaders}</tr>
        </thead>
        <tbody>{tblRows}</tbody>
      </table>
    </div>
  )
}

export default () => (
  <StaticQuery query={query} render={data => <PatternsStatus data={data} />} />
)

const query = graphql`
  query PatternsStatusQuery {
    allMdx(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: {
        fields: {
          fileName: { name: { eq: "index" } }
          slug: { regex: "/^/Foundations|^/Components/" }
        }
        frontmatter: { status: {} }
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            order
            status {
              sketch
              scss
            }
          }
        }
      }
    }
  }
`
