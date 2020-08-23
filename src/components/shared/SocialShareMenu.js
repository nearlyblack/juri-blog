import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Popover from "@material-ui/core/Popover"
import {
  FacebookShareButton,
  EmailShareButton,
  LineShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  FacebookIcon,
  EmailIcon,
  LineIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
} from "react-share"
const useStyles = makeStyles(theme => ({
  popover: {
    display: "flex",
    flexDirection: "column",
  },
  row: { display: "flex", justifyContent: "space-around" },
  icon: { margin: theme.spacing(0.75) },
}))

function SocialSharePopover({
  anchorEl,
  handleClose,
  handleKeyDown,
  linkLocation,
}) {
  const classes = useStyles()

  return (
    <Popover
      id="social-popover"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      className={classes.popover}
    >
      <div className={classes.row}>
        <div
          tabIndex={0}
          role="button"
          onKeyDown={handleKeyDown}
          onClick={handleClose}
        >
          <FacebookShareButton url={linkLocation}>
            <FacebookIcon className={classes.icon} size={32} round={true} />
          </FacebookShareButton>
        </div>
        <div
          tabIndex={0}
          role="button"
          url={linkLocation}
          onKeyDown={handleKeyDown}
          onClick={handleClose}
        >
          <EmailShareButton url={linkLocation}>
            <EmailIcon className={classes.icon} size={32} round={true} />
          </EmailShareButton>
        </div>
        <div
          tabIndex={0}
          role="button"
          onKeyDown={handleKeyDown}
          onClick={handleClose}
        >
          <LineShareButton url={linkLocation}>
            <LineIcon className={classes.icon} size={32} round={true} />
          </LineShareButton>
        </div>
      </div>
      <div className={classes.row}>
        <div
          tabIndex={0}
          role="button"
          onKeyDown={handleKeyDown}
          onClick={handleClose}
        >
          <LinkedinShareButton url={linkLocation}>
            <LinkedinIcon className={classes.icon} size={32} round={true} />
          </LinkedinShareButton>
        </div>
        <div
          tabIndex={0}
          role="button"
          onKeyDown={handleKeyDown}
          onClick={handleClose}
        >
          <RedditShareButton url={linkLocation}>
            <RedditIcon className={classes.icon} size={32} round={true} />
          </RedditShareButton>
        </div>
        <div
          tabIndex={0}
          role="button"
          onKeyDown={handleKeyDown}
          onClick={handleClose}
        >
          <TwitterShareButton url={linkLocation}>
            <TwitterIcon className={classes.icon} size={32} round={true} />
          </TwitterShareButton>
        </div>
      </div>
    </Popover>
  )
}

export default SocialSharePopover
