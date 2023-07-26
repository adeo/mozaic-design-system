import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { ControlCross16, NotificationCircleAvailable24 } from '../icons'
import * as styles from './patternstatus.module.css'

const query = graphql`
  query PatternsStatusQuery {
    Foundations: allMdx(
      sort: { frontmatter: { title: ASC } }
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
              figma
            }
          }
        }
      }
    }
    Components: allMdx(
      sort: { frontmatter: { title: ASC } }
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
              figma
            }
          }
        }
      }
    }
  }
`

const PatternsStatus = ({ type }) => {
  const data = useStaticQuery(query)
  const edges = data[type].edges

  const tableModel = edges[0].node.fields.slug.includes('Components')
    ? {
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
          Freemarker: null,
        },
      }
    : {
        Patterns: {
          name: null,
        },
        Design: {
          Sketch: null,
          Figma: null,
        },
        Development: {
          SCSS: null,
        },
      }

  const categories = Object.keys(tableModel)

  const platforms = categories
    .map((title) => Object.keys(tableModel[title]).map((subtitle) => subtitle))
    .toString()
    .split(',')
    .map((item) => item)

  const platformsTableHeader = platforms.map((subtitle) => (
    <th className={styles.platform} key={'th_' + subtitle}>
      {subtitle === 'name' ? '' : subtitle}
    </th>
  ))

  const discipline = categories.map((title) => {
    const colspan = Object.keys(tableModel[title]).length

    return (
      <th colSpan={colspan} key={'th_' + title}>
        <div className={styles.discipline}>{title}</div>
      </th>
    )
  })

  const tblRows = edges
    .filter((pattern) => !!pattern.node.frontmatter.status)
    .map((pattern, index) => {
      const thisPatternStatus = []

      platforms.forEach((plateform) => {
        const relatedStatus = Object.keys(pattern.node.frontmatter.status).find(
          (status) => status.toLowerCase() === plateform.toLowerCase()
        )

        if (plateform === 'name') {
          thisPatternStatus.push(
            <td key={'value_row_' + plateform + index}>
              <Link
                className={styles.patternName}
                to={pattern.node.fields.slug}
              >
                {pattern.node.frontmatter.title}
              </Link>
            </td>
          )
        } else if (
          relatedStatus &&
          pattern.node.frontmatter.status[relatedStatus]
        ) {
          thisPatternStatus.push(
            <td key={'value_row_' + plateform + index}>
              <NotificationCircleAvailable24 fill="#41a017" />
            </td>
          )
        } else {
          thisPatternStatus.push(
            <td key={'value_row_' + plateform + index}>
              <ControlCross16 fill="currentColor" />
            </td>
          )
        }
      })

      return (
        <tr className={styles.row} key={'value_row_' + index}>
          {thisPatternStatus}
        </tr>
      )
    })

  return (
    <div>
      <table className={styles.statusTable}>
        <thead>
          <tr>{discipline}</tr>
          <tr>{platformsTableHeader}</tr>
        </thead>
        <tbody>{tblRows}</tbody>
      </table>
    </div>
  )
}

export default PatternsStatus
