import React from "react"
import Grid from "@material-ui/core/Grid"
import CustomContainer from "../shared/CustomContainer"
import PicturesColumn from "../shared/PicturesColumn"
import TextColumn from "../shared/TextColumn"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  customCont: { minHeight: "82vh" },
  title: { marginBottom: theme.spacing(3) },
  aboutSection: {
    marginBottom: theme.spacing(3),
  },
  sectionTitle: { marginBottom: theme.spacing(1) },
  sectionBody: { fontWeight: 300 },
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
            fluid(quality: 90, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
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
  console.log(data)
  const text = data.allMarkdownRemark.edges
  const images = data.allImageSharp.edges
  return (
    <CustomContainer className={classes.customCont}>
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

export default ContactMain
