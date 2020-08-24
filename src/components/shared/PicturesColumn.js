import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import PropTypes from "prop-types"

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
function PicturesColumn({ images }) {
  const classes = useStyles()
  return (
    <div className={classes.pictureDiv}>
      {images.map((image, index) => (
        <Img
          key={`about-img-${index}`}
          className={clsx(classes.image, index !== 0 && classes.picMarTop)}
          fluid={image.node.fluid}
        />
      ))}
    </div>
  )
}

export default PicturesColumn

PicturesColumn.propTypes = {
  images: PropTypes.array,
}
