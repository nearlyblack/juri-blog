import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import CustomContainer from "../shared/CustomContainer"
import PicturesColumn from "../shared/PicturesColumn"
import TextColumn from "../shared/TextColumn"

function AboutMain() {
  const data = useStaticQuery(graphql`
    query AboutData {
      allImageSharp(filter: { fluid: { originalName: { regex: "/about/" } } }) {
        edges {
          node {
            fluid(quality: 80, maxWidth: 1050) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
        edges {
          node {
            rawMarkdownBody
          }
        }
      }
    }
  `)
  const text = data.allMarkdownRemark.edges[0]
  const images = data.allImageSharp.edges
  return (
    <CustomContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <TextColumn text={text} />
        </Grid>
        <Grid item xs={12} md={3}>
          <PicturesColumn images={images} />
        </Grid>
      </Grid>
    </CustomContainer>
  )
}

export default AboutMain
