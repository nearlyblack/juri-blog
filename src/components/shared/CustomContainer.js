import React from "react"
import PropTypes from "prop-types"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: "1100px",
    padding: theme.spacing(2.5, 2),
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}))
function CustomContainer(props) {
  const classes = useStyles()
  const { children, className } = props

  return (
    <Container className={clsx(classes.container, className)}>
      {children}
    </Container>
  )
}
CustomContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default CustomContainer
