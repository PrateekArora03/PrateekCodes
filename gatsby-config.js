module.exports = {
  siteMetadata: {
    title: `Prateek Arora`,
    name: `Prateek`,
    siteUrl: `https://prateekcodes.com`,
    description: `Prateek Arora | documenting my Journey | Currently learning #NodeJS | Google Scholar Udacity 2K18`,
    hero: {
      heading: `Let's learn and code together.`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Prateek_Codes`
      },
      {
        name: `github`,
        url: `https://github.com/prarora98`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/prateekcodes`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/prateekcodes/`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146786460-1"
      }
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Prateek Arora`,
        short_name: `prateek`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/logo.png`
      }
    }
  ]
};
