require('dotenv').config();

module.exports = {
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE: process.env.AIRTABLE_BASE,
    NOTION_SECRET: process.env.NOTION_SECRET,
    NOTION_SLACK: process.env.NOTION_SLACK,
    NOTION_GROUPS: process.env.NOTION_GROUPS,
    NOTION_CONTACTS: process.env.NOTION_CONTACTS,
    NOTION_EVENTS: process.env.NOTION_ENENTS,
    NOTION_CREDITS: process.env.NOTION_CREDITS,
    NOTION_INTERVIEWS: process.env.NOTION_INTERVIEWS,
    NOTION_LOCATIONS: process.env.NOTION_LOCATIONS,
    NOTION_ATTENDEES: process.env.NOTION_ATTENDEES,
    AUTH0_SECRET: process.env.AUTH0_SECRET,
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
  },
  images: {
    domains: ['i.scdn.co', 'mosaic.scdn.co', 'lh3.googleusercontent.com', 's.gravatar.com'],
  },
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  async redirects() {
    return [
      {
        source: '/random',
        destination: '/events/randomizer',
        permanent: true,
      },
    ]
  },
}
