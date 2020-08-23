import React from "react"
import Grid from "@material-ui/core/Grid"
import CustomContainer from "../shared/CustomContainer"
import PicturesColumn from "../shared/PicturesColumn"
import TextColumn from "../shared/TextColumn"
import { useStaticQuery, graphql } from "gatsby"

function AboutMain() {
  const data = useStaticQuery(graphql`
    query AboutData {
      allImageSharp(filter: { fluid: { originalName: { regex: "/about/" } } }) {
        edges {
          node {
            fluid(quality: 90, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
        edges {
          node {
            frontmatter {
              title
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)
  const text = data.allMarkdownRemark.edges
  const images = data.allImageSharp.edges
  return (
    <CustomContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <TextColumn sections={text} />
        </Grid>
        <Grid item xs={12} md={3}>
          <PicturesColumn images={images} />
        </Grid>
      </Grid>
    </CustomContainer>
  )
}

export default AboutMain
