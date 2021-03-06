import React from "react"
import { useIntl, changeLocale } from "gatsby-plugin-react-intl"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  navBtn: {
    color: "#fff",
    fontWeight: 700,
    padding: 0,
    minWidth: "40px",
  },
}))

function IntlDiv() {
  const classes = useStyles()
  const intl = useIntl()

  const handleEnClick = () => changeLocale("en")

  const handleJaClick = () => changeLocale("ja")

  return (
    <div>
      <Button classes={{ root: classes.navBtn }} onClick={handleEnClick}>
        {intl.formatMessage({ id: "en" })}
      </Button>
      <Button classes={{ root: classes.navBtn }} onClick={handleJaClick}>
        {intl.formatMessage({ id: "ja" })}
      </Button>
    </div>
  )
}

export default IntlDiv
