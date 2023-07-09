import * as React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import AreaDiscover from '../components/AreaDiscover'
import AreaContact from '../components/AreaContact'
import AreaValues from '../components/AreaValues'
import Footer from '../components/Footer'
import './index.scss'

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Header />
      <AreaDiscover />
      <AreaContact />
      <AreaValues />
      <Footer />
    </Layout>
  )
}

export const Head = (props) => {
  return (
    <>
      <title>Mozaic – The Adeo's Design System</title>
      <meta
        name="description"
        content="Mozaic is Adeo's Design System, created to enhance the team's delivery time, improve quality of deliverables and thus help set up a coherent customer experience."
      />
    </>
  )
}

export default IndexPage
