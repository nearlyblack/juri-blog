import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import HeaderHeroBgImg from "./HeaderHeroBgImg"
import CustomContainer from "../shared/CustomContainer"
import PropTypes from "prop-types"
import HeaderMast from "./HeaderMast"
import HeaderMain from "./HeaderMain"
import HeaderNav from "./HeaderNav"

const useStyles = makeStyles(theme => ({
  smallSizeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}))

function HeaderHero({ full }) {
  const classes = useStyles()
  return (
    <HeaderHeroBgImg full={Boolean(full)}>
      <CustomContainer className={classes.smallSizeContainer}>
        <HeaderMast />
        {full && <HeaderMain />}
        <HeaderNav />
      </CustomContainer>
    </HeaderHeroBgImg>
  )
}
HeaderHero.propTypes = {
  full: PropTypes.bool,
}
export default HeaderHero
