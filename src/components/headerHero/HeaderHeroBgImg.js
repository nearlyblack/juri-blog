import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"

const useStyles = makeStyles({
  root: {
    height: "45vw",
    minHeight: "40vh",
    maxHeight: "65vh",
    width: "100%",
  },
  rootSm: { height: "9rem", width: "100%" },
  overlay: {
    height: "100%",
    width: "100%",
    background: "rgba(0,0,0,.3)",
    zIndex: 10,
  },
})

const HeaderHeroBgImage = ({ children, full }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp(
        filter: { fluid: { originalName: { regex: "/writerBg/" } } }
      ) {
        edges {
          node {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  const imgData = data.allImageSharp.edges[0].node.fluid
  return (
    <BackgroundImage
      className={full ? classes.root : classes.rootSm}
      fluid={imgData}
    >
      <div className={classes.overlay}>{children}</div>
    </BackgroundImage>
  )
}
HeaderHeroBgImage.propTypes = {
  children: PropTypes.node.isRequired,
  full: PropTypes.bool,
}
export default HeaderHeroBgImage
