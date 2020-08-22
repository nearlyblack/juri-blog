import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

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
  const { firstName, lastName, selfDescription } = data.site.siteMetadata
  return (
    <div className={classes.main}>
      <Typography className={classes.name} variant="h2" component="h1">
        {`${firstName} ${lastName}`}
      </Typography>
      <Typography className={classes.selfDescription} variant="subtitle1">
        {selfDescription}
      </Typography>
    </div>
  )
}

export default HeaderMast
