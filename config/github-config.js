module.exports = {
  githubApiToken: process.env.GITHUB_API_TOKEN,
  githubApiQuery: `query ($number_of_repos: Int!) {
      viewer {
        name
        avatarUrl
        isHireable
        resourcePath
        repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
          nodes {
            name
            description
            homepageUrl
            forkCount
            createdAt
            updatedAt
            resourcePath
            languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
              edges {
                node {
                  name
                  color
                }
              }
            }
            licenseInfo {
              name
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }`,
  githubApiVariables: {
    number_of_repos: 6,
  },
}
