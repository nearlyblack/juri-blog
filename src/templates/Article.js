import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CustomContainer from "../components/shared/CustomContainer"
import { makeStyles } from "@material-ui/core/styles"
//import Typography from "@material-ui/core/Typography"
import SEO from "../components/seo"
import MuiMarkdown from "../components/shared/MuiMarkdown"
const useStyles = makeStyles(theme => ({
  customCont: { minHeight: "82vh" },
  title: { marginBottom: theme.spacing(3) },
  aboutSection: {
    marginBottom: theme.spacing(3),
  },
  sectionTitle: { marginBottom: theme.spacing(1) },
  sectionBody: { fontWeight: 300 },
}))

export default function Article({ data }) {
  const classes = useStyles()
  const article = data.markdownRemark
  const { frontmatter, html } = article

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.overview} />
      <CustomContainer className={classes.customCont}>
        <div>
          {/*<Typography className={classes.title} variant="h2">
            {frontmatter.title}
  </Typography>*/}
          <MuiMarkdown>{html}</MuiMarkdown>
        </div>
      </CustomContainer>
    </Layout>
  )
}
export const articleQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      rawMarkdownBody
      html
      frontmatter {
        title
        overview
      }
    }
  }
`
