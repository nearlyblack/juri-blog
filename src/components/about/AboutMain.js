import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import CustomContainer from "../shared/CustomContainer"
import AboutPicturesColumn from "./AboutPicturesColumn"
import AboutTextColumn from "./AboutTextColumn"

function AboutMain() {
  return (
    <CustomContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <AboutTextColumn />
        </Grid>
        <Grid item xs={12} md={3}>
          <AboutPicturesColumn />
        </Grid>
      </Grid>
    </CustomContainer>
  )
}

export default AboutMain
