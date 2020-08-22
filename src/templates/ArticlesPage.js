import React from "react"
import CustomContainer from "../components/shared/CustomContainer"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"
import Pagination from "@material-ui/lab/Pagination"
import Layout from "../components/layout"
import ArticleCard from "../components/shared/ArticleCard"
import { navigate } from "gatsby"
const useStyles = makeStyles(theme => ({
  customCont: { minHeight: "82vh" },
  articlesGrid: {
    marginBottom: theme.spacing(2),
  },
}))

function ArticlesPage(props) {
  const classes = useStyles()

  const { data, pageContext } = props
  const { currentPage, numPages } = pageContext
  const articles = data.allMarkdownRemark.edges
  const images = data.allImageSharp.edges
  const handlePaginationChange = (e, page) => {
    navigate(`/articles/${page !== 1 ? page : ""}`)
  }
  return (
    <Layout>
      <CustomContainer className={classes.customCont}>
        <Grid className={classes.articlesGrid} container spacing={3}>
          {articles.map((article, index) => (
            <Grid
              key={`article-${article.node.frontmatter.title}`}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <ArticleCard
                article={article.node.frontmatter}
                img={images[index].node.fluid}
                linkTo={article.node.fields.slug}
              />
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={numPages}
          page={currentPage}
          onChange={handlePaginationChange}
        />
      </CustomContainer>
    </Layout>
  )
}
export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/article/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            overview
            tags
            author
            length
            title
          }
          fields {
            slug
          }
        }
      }
    }
    allImageSharp(
      filter: { fluid: { originalName: { regex: "/placeholder/" } } }
    ) {
      edges {
        node {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
export default ArticlesPage
