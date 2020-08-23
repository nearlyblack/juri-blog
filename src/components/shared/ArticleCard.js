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
import { Link } from "gatsby-theme-material-ui"
import SocialShareMenu from "./SocialShareMenu"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  content: { flex: 1 },
  actionsDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  timeToRead: { padding: theme.spacing(0, 1) },
}))

function ArticleCard({ article, img, linkTo, linkLocation }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleKeyDown = e => {
    e.keyCode === 13 && handleClose()
  }
  return (
    <Card className={classes.root}>
      <Link to={linkTo} underline="none">
        <Img className={classes.media} fluid={img} />

        <CardContent className={classes.content}>
          <Typography color="textPrimary" variant="subtitle2">
            {article.tags.join(", ")}
          </Typography>
          <Typography color="textPrimary" variant="h6" component="h6">
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.overview}
          </Typography>
        </CardContent>
      </Link>
      <CardActions className={classes.actionsDiv}>
        <IconButton onClick={handleClick}>
          <ShareIcon />
        </IconButton>
        <SocialShareMenu
          anchorEl={anchorEl}
          handleClose={handleClose}
          handleKeyDown={handleKeyDown}
          linkLocation={linkLocation}
        />
        <Typography className={classes.timeToRead} variant="body2">
          {article.length}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default ArticleCard

ArticleCard.propTypes = {
  articles: PropTypes.object,
}
