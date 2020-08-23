import React from "react"
import CustomContainer from "../shared/CustomContainer"
import ArticleCard from "../shared/ArticleCard"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"

function MainLanding({ origin }) {
  const data = useStaticQuery(graphql`
    query PlaceholderImgQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/article/" } }) {
        edges {
          node {
            frontmatter {
              title
              overview
              tags
              author
              length
              imgPlaceholder {
                childImageSharp {
                  fluid(quality: 60, maxWidth: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const articles = data.allMarkdownRemark.edges
  return (
    <CustomContainer>
      <Grid container spacing={3}>
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
              img={
                article.node.frontmatter.imgPlaceholder.childImageSharp.fluid
              }
              linkTo={article.node.fields.slug}
              linkLocation={`${origin}${article.node.fields.slug}`}
            />
          </Grid>
        ))}
      </Grid>
    </CustomContainer>
  )
}

export default MainLanding
