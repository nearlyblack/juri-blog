import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import ShareIcon from "@material-ui/icons/Share"
import Typography from "@material-ui/core/Typography"
import pink from "@material-ui/core/colors/pink"
import { Link } from "gatsby-theme-material-ui"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  content: { flex: 1 },
  avatar: {
    backgroundColor: pink[200],
  },
  actionsDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

function ArticleCard({ article, img, linkTo }) {
  const classes = useStyles()

  return (
    <Link to={linkTo} underline="none">
      <Card className={classes.root}>
        <Img className={classes.media} fluid={img} />

        <CardContent className={classes.content}>
          <Typography variant="subtitle2">{article.tags.join(", ")}</Typography>
          <Typography variant="h6" component="h6">
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.overview}
          </Typography>
        </CardContent>
        <CardActions className={classes.actionsDiv}>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Typography variant="body2">{article.length}</Typography>
        </CardActions>
      </Card>
    </Link>
  )
}

export default ArticleCard

ArticleCard.propTypes = {
  articles: PropTypes.object,
}
