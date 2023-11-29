import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './changelog.module.css'

const Changelog = () => {
  const data = useStaticQuery(graphql`
    query {
      allGithubRelease {
        edges {
          node {
            descriptionHTML
          }
        }
      }
    }
  `)

  return (
    <div className={styles.changelogContainer}>
      {data.allGithubRelease.edges
        .filter((release) => release.node.descriptionHTML !== '')
        .map((release, i) => (
          <section
            className={styles.changelogItem}
            key={`release-${i}`}
            first={i === 0}
            dangerouslySetInnerHTML={{ __html: release.node.descriptionHTML }}
          />
        ))}
    </div>
  )
}

export default Changelog
