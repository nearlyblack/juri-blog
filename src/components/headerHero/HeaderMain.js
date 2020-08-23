import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { useIntl } from "gatsby-plugin-react-intl"

const useStyles = makeStyles({
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "#fff",
    fontWeight: 700,
  },
  selfDescription: { color: "#fff", textAlign: "center" },
})
function HeaderMast() {
  const classes = useStyles()
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query MainQuery {
      site {
        siteMetadata {
          firstName
          lastName
          selfDescription
        }
      }
    }
  `)
  return (
    <div className={classes.main}>
      <Typography className={classes.name} variant="h2" component="h1">
        {intl.formatMessage({ id: "fullName" })}
      </Typography>
      <Typography className={classes.selfDescription} variant="subtitle1">
        {intl.formatMessage({ id: "headerSubtitle" })}
      </Typography>
    </div>
  )
}

export default HeaderMast
