import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import LinkDiv from "../shared/LinkDiv"
const useStyles = makeStyles(theme => ({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnDiv: {},
  headerBtn: { color: "#fff" },
}))
function HeaderNav() {
  const classes = useStyles()

  return (
    <div className={classes.nav}>
      <LinkDiv />
      <div className={classes.btnDiv}>
        <Button className={classes.headerBtn}>Action</Button>
      </div>
    </div>
  )
}

export default HeaderNav
