import React from 'react'
import styled, { css } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const ChangelogContainer = styled.div`
  h2 {
    margin-top: 2em;
  }

  h2,
  h3 {
    margin-bottom: 1em !important;
  }

  h3 {
    margin-top: 1.5em !important;
    line-height: 1;
  }
`

export const ChangelogItem = styled.div`
  ${({ first }) =>
    !first &&
    css`
      font-size: 0.8rem;
    `}
  padding-bottom: 2em;
  border-bottom: solid 1px #c3c3c3;
`

const ChangelogComponent = ({ data }) => (
  <ChangelogContainer>
    {data.allGithubRelease.edges
      .filter((release) => release.node.descriptionHTML !== '')
      .map((release, i) => (
        <ChangelogItem
          key={`release-${i}`}
          first={i === 0}
          dangerouslySetInnerHTML={{ __html: release.node.descriptionHTML }}
        />
      ))}
  </ChangelogContainer>
)

const Changelog = () => {
  const data = useStaticQuery(graphql`
    query AllGitReleasesQuery2 {
      allGithubRelease {
        edges {
          node {
            descriptionHTML
          }
        }
      }
    }
  `)

  return <ChangelogComponent data={data} />
}

export default Changelog
