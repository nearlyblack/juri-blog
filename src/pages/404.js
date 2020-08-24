import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import CustomContainer from "../components/shared/CustomContainer"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  customCont: { minHeight: "80vh" },
  header: { marginBottom: theme.spacing(3) },
}))

const NotFoundPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="404: Not found" />
      <CustomContainer className={classes.customCont}>
        <Typography className={classes.header} variant="h4">
          Everyone thought there would be something here...
        </Typography>
        <Typography paragraph variant="body1">
          But there was nothing!
        </Typography>
        <Typography variant="body1">
          Maybe you wanted to go <Link to="/articles">here</Link>?
        </Typography>
      </CustomContainer>
    </Layout>
  )
}

export default NotFoundPage
