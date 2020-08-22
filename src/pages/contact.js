import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactMain from "../components/contact/ContactMain"
const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactMain />
  </Layout>
)

export default IndexPage
