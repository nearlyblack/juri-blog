import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MuiMarkdown from "./MuiMarkdown"
import PropTypes from "prop-types"

const useStyles = makeStyles(theme => ({
  title: { marginBottom: theme.spacing(3) },
  sectionBody: {
    marginBottom: theme.spacing(3),
  },
}))
function TextColumn({ text }) {
  const classes = useStyles()
  return (
    <MuiMarkdown className={classes.sectionBody}>
      {text.node.rawMarkdownBody}
    </MuiMarkdown>
  )
}

export default TextColumn

TextColumn.propTypes = {
  text: PropTypes.object,
}
