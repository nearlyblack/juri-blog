import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer/Footer"
import HeaderHero from "../components/headerHero/HeaderHero"
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles"

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)
const Layout = ({ children, full }) => {
  /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)*/

  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderHero full={Boolean(full)} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  full: PropTypes.bool,
}

export default Layout
