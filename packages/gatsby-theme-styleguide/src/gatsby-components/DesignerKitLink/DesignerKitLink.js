import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default (props) => {
  const { children, ...rest } = props
  return (
    <StaticQuery
      query={graphql`
        query LstVersion {
          githubRelease(isCurrent: { eq: true }) {
            tagName
          }
        }
      `}
      render={(data) => {
        return (
          <a
            {...rest}
            href={`https://github.com/adeo/design-system--styleguide/releases/download/${data.githubRelease.tagName}/designer-kit.zip`}
          >
            {children}
          </a>
        )
      }}
    />
  )
}
