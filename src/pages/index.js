import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  const { src } = data.file.childImageSharp.original
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`Gautam Somappa`, `Gatsby`, `react`, `Home`]}
      />
      <LandingBio imageSrc={src} />
    </Layout>
  )
}

export default IndexPage

export const fileSystemQuery = graphql`
  query {
    file(relativePath: { eq: "gautam-dp.jpg" }) {
      childImageSharp {
        original {
          src
        }
      }
    }
  }
`
