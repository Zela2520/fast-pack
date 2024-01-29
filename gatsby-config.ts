import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `fast-pack`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-provide-react',
  {
    resolve: `gatsby-plugin-typescript`,
    options: {
      isTSX: true,
      jsxPragma: `React`,
      allExtensions: true,
    },
  },]
};

export default config;
