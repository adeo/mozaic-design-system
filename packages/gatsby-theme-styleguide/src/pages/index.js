import * as React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.scss'

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Header />
      <Footer />
    </Layout>
  )
}

export const Head = (props) => {
  return (
    <>
      <title>ADEO Design system</title>
      <meta
        name="description"
        content="A global and collaborative design system that facilitates the designer and developer experience, enabling them to create universal interfaces perfectly aligned with the business strategy of Adeo."
      />
    </>
  )
}

export default IndexPage
