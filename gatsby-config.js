module.exports = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://jamesbrookes.netlify.app/`,
    // Your Name
    name: 'James Brookes',
    // Main Site Title
    title: `James Brookes | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Computer Science Graduate based in Norwich, UK`,
    // Optional: Twitter account handle
    author: `@James_Brookes99`,
    // Optional: Github account URL
    github: `https://github.com/james0209`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/james-brookes-367413193/`,
    // Content of the About Me section
    about: `I'm a motivated computer science graduate who enjoys taking things apart to understand how they work.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'University Website Redesign',
        description:
          'A blazing fast re-design of my university website, built with GatsbyJs, React, and React Router',
        link: 'https://james0209.github.io/hci_cw2/',
      },
      {
        name: 'Study Planner',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Social Storm Hackathon',
        description:
          'Runner up in a 48-hour hackathon. Worked in teams with students from Belgium and Kenya.',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description: 'JavaScript (ES6+), Node.js, React, Bootstrap, PHP',
      },
      {
        name: 'Databases',
        description: 'PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
