import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ArrowArrowBottom16 } from '../icons'
import * as styles from './currentversion.module.css'

function CurrentVersion() {
  const data = useStaticQuery(graphql`
    query {
      githubRelease(isCurrent: { eq: true }) {
        tagName
      }
    }
  `)

  return (
    <div className={styles.container}>
      {data.githubRelease.tagName}
      <ArrowArrowBottom16 fill="currentColor" />
    </div>
  )
}

export default CurrentVersion
