import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export default ({ data }) => {
  return (
    <>
      <Helmet>
        <title type="text/css">{data.preview.path}</title>
        <style type="text/css">{data.preview.codes.css}</style>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: data.preview.codes.html }}></div>
    </>
  )
}

export const query = graphql`
  query PreviewQuery($slug: String!) {
    preview(fields: { slug: { eq: $slug } }) {
      path
      codes {
        css
        html
        js
      }
    }
  }
`
