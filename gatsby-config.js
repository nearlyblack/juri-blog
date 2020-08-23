module.exports = {
  siteMetadata: {
    siteAddress: "http://localhost:8000",
    title: "JOGW",
    firstName: "Juri",
    lastName: "Ogawa",
    selfDescription: "Freelance writer | Proofreader | Translator",
    description: `A personal portfolio for Juri Ogawa, freelance writer, proofreader and translator`,
    author: `Juri Ogawa`,
    social: {
      linkedIn: "https://www.linkedin.com/in/juri-ogawa-2a7a6b1a9/",
      facebook: "https://www.facebook.com/juri.ogawa.tabiholic",
      email: "juri.ogawa1@gmail.com",
    },
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,

    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `ja`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
        // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
        redirectDefaultLanguageToRoot: true,
        // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
        ignoredPaths: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          //Only works in 1st position - gets rid of the <p> wrapping tag
          "gatsby-remark-unwrap-images",
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              withWebp: true,
              disableBgImage: true,
              markdownCaptions: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: `markdown`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Juri Ogawa's Portfolio`,
        short_name: `JOGW`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/icons/android-chrome-512x512.png`,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/icon-path*"],
        },
      },
    },
    `gatsby-theme-material-ui`,
  ],
}
