module.exports = {
  siteMetadata: {
      siteTitle: 'Edin Citaku',
      siteDescription: 'Blog of Edin Citaku',
      siteImage: '/banner.png', // main image of the site for metadata
      siteUrl: 'https://edincitaku.com',
      pathPrefix: '/',
      siteLanguage: 'en',
      ogLanguage: `en_US`,
      author: 'Edin Citaku', // for example - 'Ivan Ganev'
      authorDescription: 'A passion driven Computer Science student', // short text about the author
      avatar: '/avatar.jpg',
      twitterSite: 'Edin_Citaku', // website account on twitter
      twitterCreator: '', // creator account on twitter
      social: [
        {
          icon: `at`,
          url: `mailto:edin.citaku@gmail.com`,
        },
        {
              icon: `twitter`,
              url: `https://twitter.com/Edin_Citaku`
          },
          {
              icon: `github`,
              url: `https://github.com/EdinCitaku`
          },
          {
              icon: `linkedin`,
              url: `https://www.linkedin.com/in/edin-citaku-564000127/`
          },
          {
              icon: `discord`,
              url: `https://discord.com/users/219797278368464897`
          }
      ]
  },
  plugins: [{
          resolve: 'gatsby-theme-chronoblog',
          options: {
              uiText: {
                  // ui text fot translate
                  feedShowMoreButton: 'show more',
                  feedSearchPlaceholder: 'search',
                  cardReadMoreButton: 'read more →',
                  allTagsButton: 'all tags'
              },
              feedItems: {
                  // global settings for feed items
                  limit: 50,
                  yearSeparator: true,
                  yearSeparatorSkipFirst: true,
                  contentTypes: {
                      links: {
                          beforeTitle: '🔗 '
                      }
                  }
              },
              feedSearch: {
                  symbol: '🔍'
              }
          }
      },
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: `Chronoblog Gatsby Theme`,
              short_name: `Chronoblog`,
              start_url: `/`,
              background_color: `#fff`,
              theme_color: `#3a5f7d`,
              display: `standalone`,
              icon: `src/assets/favicon.png`
          }
      },
      {
          resolve: `gatsby-plugin-sitemap`
      },
      {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              // replace "UA-XXXXXXXXX-X" with your own Tracking ID
              trackingId: 'UA-192936292-2'
          }
      }
  ]
};
