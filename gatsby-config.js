module.exports = {
  siteMetadata: {
    title: 'trevorlang.github.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Rubik']
      }
    }
  ],
};
