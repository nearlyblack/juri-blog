import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import FacebookIcon from "@material-ui/icons/Facebook"
import EmailIcon from "@material-ui/icons/Email"
import { Typography } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"

const useStyles = makeStyles(theme => ({
  mast: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: 700,
  },
  socialIcon: { color: "#fff", margin: theme.spacing(0, 0, 0, 1) },
}))
function HeaderMast() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query MastQuery {
      site {
        siteMetadata {
          title
          social {
            email
            facebook
            linkedIn
          }
        }
      }
    }
  `)
  const { social, title } = data.site.siteMetadata
  const handleEmailClick = () => {}
  return (
    <div className={classes.mast}>
      <Link to="/" className={classes.title} variant="h6">
        {title}
      </Link>
      <div>
        <Link underline="none" to={social.linkedIn}>
          <LinkedInIcon className={classes.socialIcon} />
        </Link>
        <Link underline="none" to={social.facebook}>
          <FacebookIcon className={classes.socialIcon} />
        </Link>
        <Link underline="none" to={`mailto:${social.email}`}>
          <EmailIcon
            onClick={handleEmailClick}
            className={classes.socialIcon}
          />
        </Link>
      </div>
    </div>
  )
}

export default HeaderMast
