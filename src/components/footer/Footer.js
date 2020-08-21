import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import LinkDiv from "../shared/LinkDiv"
import CustomContainer from "../shared/CustomContainer"
import grey from "@material-ui/core/colors/grey"
import { Typography } from "@material-ui/core"
const useStyles = makeStyles(theme => ({
  footer: {
    height: "5rem",
    background: grey[900],
  },
  contents: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  copyright: {
    color: "#fff",
    fontSize: theme.typography.caption.fontSize,
    fontWeight: 400,
  },
}))

function Footer({ siteMetadata }) {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <CustomContainer>
        <div className={classes.contents}>
          <Typography className={classes.copyright} variant="subtitle2">
            Copyright &copy; Juri Ogawa 2020
          </Typography>
          <LinkDiv small />
        </div>
      </CustomContainer>
    </footer>
  )
}

export default Footer
