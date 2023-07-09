import * as React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import { MDXProvider } from '@mdx-js/react'
import './base.scss'
import Menu from './Menu'
// import withLocationPreview from '../components/Preview/withLocation'
// import Color from '../components/Color'
// import Swatch from '../components/Swatch'
// import Hint, { HintItem } from '../components/Hint'
// import IconViewer from '../components/IconViewer'
// import Code from '../components/Code'
// import InlineCode from '../components/InlineCode'
// import Highlight from '../components/Highlight'
// import SubContents from '../components/SubContents'
// import DesignerKitLink from '../components/DesignerKitLink'
// import Story from '../components/Story'
import * as styles from './layout.module.css'

// const shortcodes = {
//   Color,
//   Swatch,
//   Hint,
//   HintItem,
//   IconViewer,
//   DesignerKitLink,
//   Highlight,
//   pre: ({ children }) => <Code>{children}</Code>,
//   inlineCode: InlineCode,
// }

const Layout = ({ children, location }) => {
  // const Preview = withLocationPreview(location)
  // shortcodes.Preview = Preview
  // shortcodes.SubContents = SubContents(location)
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Menu location={location} />
      </aside>
      <main id="scroller" className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout
