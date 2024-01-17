import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './versionselector.module.css'

function CurrentVersion() {
  const data = useStaticQuery(graphql`
    query {
      allGithubRelease(limit: 20) {
        nodes {
          tagName
          url
        }
      }
    }
  `)

  const releases = data.allGithubRelease.nodes

  function handleChange(event) {
    if (event.target.value !== 'default')
      window.location.href = event.target.value
  }

  return (
    <div className={styles.container}>
      <label htmlFor="versionselect" className={styles.label}>
        older tags:
      </label>
      <select
        id="versionselect"
        className={styles.select}
        defaultValue="default"
        onChange={handleChange}
      >
        <option key="default" value="default">
          -- Choose version --
        </option>
        <option key="latest" value="https://mozaic.adeo.cloud/">
          latest release
        </option>
        {releases.map((release) => (
          <option key={release.tagName} value={release.url}>
            {release.tagName}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CurrentVersion
