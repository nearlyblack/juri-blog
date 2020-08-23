import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainLanding from "../components/mainLanding/MainLanding"
import { graphql } from "gatsby"

const IndexPage = props => {
  return (
    <Layout full>
      <SEO title="Home" />
      <MainLanding origin={props.location.origin} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query indexQuery {
    site {
      siteMetadata {
        siteAddress
        title
        firstName
        lastName
        selfDescription
        description
        author
      }
    }
  }
`

export default IndexPage
