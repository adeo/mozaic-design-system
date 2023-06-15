import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const DesignerKitLink = (props) => {
  const { children, ...rest } = props

  const data = useStaticQuery(graphql`
    query LstVersion {
      githubRelease(isCurrent: { eq: true }) {
        tagName
      }
    }
  `)

  return (
    <a
      {...rest}
      href={`https://github.com/adeo/design-system--styleguide/releases/download/${data.githubRelease.tagName}/designer-kit.zip`}
    >
      {children}
    </a>
  )
}

export default DesignerKitLink
