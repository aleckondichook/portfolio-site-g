module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://aleckondichook.dev/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "aleckondichook.dev", // Used in manifest.json
          shortName: "aleckondichook.dev", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
  ],
};
