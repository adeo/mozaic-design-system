import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{ __html: data.preview.codes.css }}
      ></style>
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
