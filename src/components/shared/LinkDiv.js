import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby-theme-material-ui"
import { useIntl } from "gatsby-plugin-react-intl"
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
  const intl = useIntl()

  return (
    <div className={classes.linkDiv}>
      <Link
        variant="button"
        className={small ? classes.navLinkSm : classes.navLink}
        to="/articles"
      >
        {intl.formatMessage({ id: "articleBtn" })}
      </Link>
      <Link
        variant="button"
        className={small ? classes.navLinkSm : classes.navLink}
        to="/about"
      >
        {intl.formatMessage({ id: "aboutBtn" })}
      </Link>

      <Link
        variant="button"
        className={small ? classes.navLinkSm : classes.navLink}
        to="/contact"
      >
        {intl.formatMessage({ id: "contactBtn" })}
      </Link>
    </div>
  )
}
LinkDiv.propTypes = {
  small: PropTypes.bool,
}
export default LinkDiv
