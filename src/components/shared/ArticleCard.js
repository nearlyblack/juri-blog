import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import ShareIcon from "@material-ui/icons/Share"
import Typography from "@material-ui/core/Typography"
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

function ArticleCard({ article, img, linkTo, linkLocation, html }) {
  const { tags, title, overview } = article
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
  const getTimeToRead = text => {
    let wordCount = text.replace(/[^\w ]/g, "").split(/\s+/).length
    return Math.floor(wordCount / 228) + 1
  }

  return (
    <Card className={classes.root}>
      <Link to={linkTo} underline="none">
        <Img className={classes.media} fluid={img} />

        <CardContent className={classes.content}>
          <Typography color="textPrimary" variant="subtitle2">
            {tags && tags.join(", ")}
          </Typography>
          <Typography color="textPrimary" variant="h6" component="h6">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {overview}
          </Typography>
        </CardContent>
      </Link>
      <CardActions className={classes.actionsDiv}>
        <IconButton aria-label="social-media-button" onClick={handleClick}>
          <ShareIcon />
        </IconButton>
        <SocialShareMenu
          anchorEl={anchorEl}
          handleClose={handleClose}
          handleKeyDown={handleKeyDown}
          linkLocation={linkLocation}
        />
        <Typography className={classes.timeToRead} variant="body2">
          {`${getTimeToRead(html)} min read`}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default ArticleCard

ArticleCard.propTypes = {
  article: PropTypes.object,
  img: PropTypes.object,
  linkTo: PropTypes.string,
  linkLocation: PropTypes.string,
  html: PropTypes.string,
}
