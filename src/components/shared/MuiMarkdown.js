import React from "react"
import ReactMarkdown from "markdown-to-jsx"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby-theme-material-ui"

const styles = theme => ({
  body1: {
    fontWeight: 300,
  },
  listItem: {
    marginTop: theme.spacing(1),
  },
})

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h3",
      },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: "h4" } },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "h5" },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: "h6", paragraph: true },
    },
    p: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <Typography
          classes={{ root: classes.body1 }}
          variant="body1"
          component="p"
          paragraph
          {...props}
        />
      )),
    },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
}

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />
}
