import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
const useStyles = makeStyles(theme => ({
  title: { marginBottom: theme.spacing(3) },
  aboutSection: {
    marginBottom: theme.spacing(3),
  },
  sectionTitle: { marginBottom: theme.spacing(1) },
  sectionBody: { fontWeight: 300 },
}))
function AboutTextColumn() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query AboutMd {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
        edges {
          node {
            frontmatter {
              title
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)
  console.log(data)
  const sections = data.allMarkdownRemark.edges
  return (
    <div>
      <Typography className={classes.title} variant="h2">
        Juri Ogawa
      </Typography>
      {sections.map((section, i) => (
        <div className={classes.aboutSection}>
          <Typography className={classes.sectionTitle} variant="h4">
            {section.node.frontmatter.title}
          </Typography>
          <Typography className={classes.sectionBody} variant="body1">
            {section.node.rawMarkdownBody}
          </Typography>
        </div>
      ))}
    </div>
  )
}

export default AboutTextColumn
