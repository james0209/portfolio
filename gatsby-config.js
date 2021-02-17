module.exports = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://jamesbrookes.gtsb.io/`,
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
    about: `Motivated computer science graduate with a passion for problem solving. From writing code to researching emerging technologies, I go the extra mile to develop the best tools and services I can.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Study Planner',
        description:
          'JavaFX written application for university students to use as a study planner. Allows for import of XML files of students timetables to provide up-to-date information regarding assignments and deadlines.',
        link: 'https://github.com/james0209/StudyPlanner',
      },
      {
        name: 'University Website Redesign',
        description:
          'A blazing fast re-design of my university website, built with GatsbyJs, React, and React Router. Code available on my Github.',
        link: 'https://uea-portal.netlify.app/',
      },
      {
        name: 'Clippesby Church Website',
        description:
          'Hired to create a website for a local Church. Maintained contact with the stakeholder and developed using Agile methodology.',
        link: 'https://clippesby.zyrosite.com/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Social Storm Hackathon',
        description:
          'Runner up in a 48-hour hackathon. Worked in a team with students from Belgium and Nairobi on an MVP social media blog to help raise awareness of gender inequality.',
        link: 'https://www.worldchangers.org.uk/socialstorm',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming',
        description: 'Java, Python, C#',
      },
      {
        name: 'Web Development & Frameworks',
        description: 'JavaScript (ES6+), Node.js, React, Dash, Bootstrap',
      },
      {
        name: 'Databases',
        description: 'PostgreSQL, MySQL',
      },
      {
        name: 'Other',
        description: 'Gatsby, Netlify, Agile / Scrum',
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
