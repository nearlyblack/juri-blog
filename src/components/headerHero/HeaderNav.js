import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import LinkDiv from "../shared/LinkDiv"
import IntlDiv from "./IntlDiv"
const useStyles = makeStyles(theme => ({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}))
function HeaderNav() {
  const classes = useStyles()

  return (
    <div className={classes.nav}>
      <LinkDiv />
      <IntlDiv />
    </div>
  )
}

export default HeaderNav
