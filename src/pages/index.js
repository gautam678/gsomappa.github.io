import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { fluid } = data.file.childImageSharp
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`Gautam Somappa`, `Gatsby`, `react`, `Home`]}
      />
      <LandingBio fluid={fluid} />
    </Layout>
  )
}

export default IndexPage

export const fileSystemQuery = graphql`
  query {
    file(relativePath: { eq: "gautam-dp.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
