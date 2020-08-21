import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMain from "../components/about/AboutMain"
const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutMain />
  </Layout>
)

export default IndexPage
