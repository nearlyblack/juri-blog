import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby-theme-material-ui"
import PropTypes from "prop-types"
const useStyles = makeStyles(theme => ({
  navLink: {
    color: "#fff",
    fontWeight: 700,
    padding: theme.spacing(0, 1, 0, 0),
  },
  navLinkSm: {
    color: "#fff",
    fontWeight: 500,
    fontSize: theme.typography.caption.fontSize,
    padding: theme.spacing(0, 0, 0, 0.75),
  },
  linkDiv: {},
}))
function LinkDiv({ small }) {
  const classes = useStyles()

  return (
    <div className={classes.linkDiv}>
      <Link
        variant="button"
        className={small ? classes.navLinkSm : classes.navLink}
        to="/articles"
      >
        Articles
      </Link>
      <Link
        variant="button"
        className={small ? classes.navLinkSm : classes.navLink}
        to="/about"
      >
        About
      </Link>

      <Link
        variant="button"
        className={small ? classes.navLinkSm : classes.navLink}
        to="/contact"
      >
        Contact
      </Link>
    </div>
  )
}
LinkDiv.propTypes = {
  size: PropTypes.bool,
}
export default LinkDiv
