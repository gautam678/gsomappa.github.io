import React from "react"
import { Link, graphql } from "gatsby"
import Repository from "../partials/repository"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Github = ({ data }) => {
  const { repositories } = data.githubData.data.viewer
  return (
    <Layout>
      <SEO
        title="Github"
        keywords={[`Gautam Somappa`, `gatsby`, `react`, `github`]}
      />

      {repositories.nodes
        .map(repo => <Repository key={repo.name} repo={repo} />)
        .reverse()}
    </Layout>
  )
}

export default Github

export const gitHubQuery = graphql`
  {
    githubData {
      data {
        viewer {
          name
          avatarUrl
          isHireable
          repositories {
            nodes {
              name
              description
              homepageUrl
              resourcePath
              forkCount
              createdAt
              updatedAt
              languages {
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
      }
    }
  }
`
