import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const IconsLink = (props) => {
  const { children, ...rest } = props
  return (
    <StaticQuery
      query={graphql`
        query IconsLstVersion {
          githubRelease(isCurrent: { eq: true }) {
            tagName
          }
        }
      `}
      render={(data) => {
        return (
          <a
            {...rest}
            href={`https://github.com/adeo/design-system--styleguide/releases/download/${data.githubRelease.tagName}/icons.zip`}
          >
            {children}
          </a>
        )
      }}
    />
  )
}

export default IconsLink
