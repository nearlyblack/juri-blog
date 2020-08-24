import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import CustomContainer from "../shared/CustomContainer"
import PicturesColumn from "../shared/PicturesColumn"
import TextColumn from "../shared/TextColumn"

const useStyles = makeStyles(theme => ({
  customCont: { minHeight: "82vh" },
}))
function ContactMain() {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query ContactData {
      allImageSharp(
        filter: { fluid: { originalName: { regex: "/contact/" } } }
      ) {
        edges {
          node {
            fluid(quality: 80, maxWidth: 1050) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
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
    <CustomContainer className={classes.customCont}>
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

export default ContactMain
