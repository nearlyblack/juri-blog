import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import CustomContainer from "../shared/CustomContainer"
import ArticleCard from "../shared/ArticleCard"
import PropTypes from "prop-types"

function MainLanding({ origin }) {
  const data = useStaticQuery(graphql`
    query PlaceholderImgQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/article/" } }
        limit: 6
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            html
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
        {articles.map((article, index) => {
          const { frontmatter, fields, html } = article.node
          return (
            <Grid
              key={`article-${frontmatter.title}`}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <ArticleCard
                article={frontmatter}
                img={frontmatter.imgPlaceholder.childImageSharp.fluid}
                linkTo={fields.slug}
                linkLocation={`${origin}${fields.slug}`}
                html={html}
              />
            </Grid>
          )
        })}
      </Grid>
    </CustomContainer>
  )
}
MainLanding.propTypes = {
  origin: PropTypes.string,
}
export default MainLanding
