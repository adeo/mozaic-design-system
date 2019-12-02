import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import StatusFlag from '../StatusFlag'
import { NavigationControlCross16px } from '@mozaic-ds/icons/react'

export const StatusTable = styled.table`
  font-size: 0.875rem;
  color: #525252;

  td,
  th {
    padding: 0.8rem 0.4rem 1rem;
    line-height: 1.3;
  }

  tr {
    border: 0 !important;
  }

  th {
    border: 0 !important;
  }
`

const Discipline = styled.div`
  border-bottom: solid 1px #554f52;
  font-size: 1rem;
  line-height: 2.5em;
`

const PatternName = styled(Link)`
  display: block;
  font-weight: bold;
  padding-left: 0.5rem;
  width: 110px;
  max-width: 110px;
  color: #525252;

  &:hover {
    text-decoration: underline;
  }
`

const Row = styled.tr`
  border: 0;

  &:nth-child(odd) {
    background-color: #f5f5f5;
  }
`

const Platform = styled.th`
  font-weight: normal;
  color: #999;
  padding-top: 0.6rem !important;
  padding-bottom: 0.4rem !important;
`

const PatternsStatus = ({ data }) => {
  const edges = data.edges

  const tableModel = {
    Patterns: {
      name: null,
    },
    Design: {
      Sketch: null,
      Figma: null,
    },
    Development: {
      SCSS: null,
      Vue: null,
      React: null,
      Angular: null,
    },
  }

  const categories = Object.keys(tableModel)

  const platforms = categories
    .map(title => Object.keys(tableModel[title]).map(subtitle => subtitle))
    .toString()
    .split(',')
    .map(item => item)

  const platformsTableHeader = platforms.map(subtitle => (
    <Platform key={'th_' + subtitle}>
      {subtitle === 'name' ? '' : subtitle}
    </Platform>
  ))

  const discipline = categories.map(title => {
    const colspan = Object.keys(tableModel[title]).length

    return (
      <th colSpan={colspan} key={'th_' + title}>
        <Discipline>{title}</Discipline>
      </th>
    )
  })

  const tblRows = edges
    .filter(pattern => !!pattern.node.frontmatter.status)
    .map((pattern, index) => {
      const thisPatternStatus = []

      platforms.forEach(plateform => {
        const relatedStatus = Object.keys(pattern.node.frontmatter.status).find(
          status => status.toLowerCase() === plateform.toLowerCase()
        )

        if (plateform === 'name') {
          thisPatternStatus.push(
            <td key={'value_row_' + plateform + index}>
              <PatternName to={pattern.node.fields.slug}>
                {pattern.node.frontmatter.title}
              </PatternName>
            </td>
          )
        } else if (relatedStatus) {
          thisPatternStatus.push(
            <td key={'value_row_' + plateform + index}>
              <StatusFlag
                status={pattern.node.frontmatter.status[relatedStatus]}
              />
            </td>
          )
        } else {
          thisPatternStatus.push(
            <td key={'value_row_' + plateform + index}>
              <NavigationControlCross16px fill="currentColor" />
            </td>
          )
        }
      })

      return <Row key={'value_row_' + index}>{thisPatternStatus}</Row>
    })

  return (
    <div>
      <StatusTable>
        <thead>
          <tr>{discipline}</tr>
          <tr>{platformsTableHeader}</tr>
        </thead>
        <tbody>{tblRows}</tbody>
      </StatusTable>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <div>
        <h2>Foundations</h2>
        <PatternsStatus data={data.Foundations} />
        <h2>Components</h2>
        <PatternsStatus data={data.Components} />
        <h3>Statuses meaning</h3>
        <p>
          <StatusFlag status="wip" />
          <b>&nbsp;&nbsp;Work In Progress</b> : The pattern may have code and
          documentation, but it should no be used.
        </p>
        <p>
          <StatusFlag status="bêta" />
          <b>&nbsp;&nbsp;Bêta</b> : The pattern is documented, and accessible in
          the specified platform, but it may have breaking changes before being
          labeled as stable. Basicaly, a bêta version of a pattern is waiting
          for users (you) to test it and confirm us that it fit the teams needs.
          You should avoid using it in production, but if you do, be extra
          careful when updating Mozaic.
        </p>
        <p>
          <StatusFlag status="stable" />
          <b>&nbsp;&nbsp;Stable</b> : The pattern is usable in production. The
          mozaic teams can add features or fix bugs to it, as long there is no
          changes required from the final user. Features supported in a stable
          pattern will be supported at least until the next major version (from
          1.5.72 to 2.0.0 for example).
        </p>
      </div>
    )}
  />
)

const query = graphql`
  query PatternsStatusQuery {
    Foundations: allMdx(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: {
        fields: {
          fileName: { name: { eq: "index" } }
          slug: { regex: "/^/Foundations/" }
        }
        frontmatter: { status: {} }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
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
    Components: allMdx(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: {
        fields: {
          fileName: { name: { eq: "index" } }
          slug: { regex: "/^/Components/" }
        }
        frontmatter: { status: {} }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
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
