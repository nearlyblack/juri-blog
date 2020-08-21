import React from "react"
import clsx from "clsx"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  pictureDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  picMarTop: {
    marginTop: theme.spacing(2),
  },
}))
function AboutPicturesColumn() {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query AboutImages {
      allImageSharp(filter: { fluid: { originalName: { regex: "/about/" } } }) {
        edges {
          node {
            fluid(quality: 90, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  console.log(data)
  const aboutImages = data.allImageSharp.edges
  return (
    <div container className={classes.pictureDiv}>
      {aboutImages.map((image, index) => (
        <Img
          className={clsx(classes.image, index !== 0 && classes.picMarTop)}
          fluid={image.node.fluid}
        />
      ))}
    </div>
  )
}

export default AboutPicturesColumn
