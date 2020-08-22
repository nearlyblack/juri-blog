import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import MuiMarkdown from "./MuiMarkdown"
const useStyles = makeStyles(theme => ({
  title: { marginBottom: theme.spacing(3) },
  aboutSection: {
    marginBottom: theme.spacing(3),
  },
  sectionTitle: { marginBottom: theme.spacing(1) },
}))
function AboutTextColumn({ sections }) {
  const classes = useStyles()
  return (
    <div>
      {sections.map((section, i) => (
        <div
          key={`section-${section.node.frontmatter.title}`}
          className={classes.aboutSection}
        >
          <Typography className={classes.sectionTitle} variant="h4">
            {section.node.frontmatter.title}
          </Typography>
          <MuiMarkdown className={classes.sectionBody}>
            {section.node.rawMarkdownBody}
          </MuiMarkdown>
        </div>
      ))}
    </div>
  )
}

export default AboutTextColumn
