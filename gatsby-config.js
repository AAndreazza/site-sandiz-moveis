require('dotenv').config()

module.exports = {
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-plugin-postcss',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken:  process.env.CONTENTFUL_ACCESS_TOKEN
            }
        }
    ]
}