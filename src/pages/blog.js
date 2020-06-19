// import React from "react"
// import { Link, graphql } from "gatsby"
// import { css } from "@emotion/core"
// import styled from "@emotion/styled"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const Content = styled.div``

// const ArticleDate = styled.h5`
//   display: inline;
//   color: #606060;
// `

// const MarkerHeader = styled.h3`
//   display: inline;
//   border-radius: 1em 0 1em 0;
//   background-image: linear-gradient(
//     -100deg,
//     rgba(255, 250, 150, 0.15),
//     rgba(255, 250, 150, 0.8) 100%,
//     rgba(255, 250, 150, 0.25)
//   );
// `

// const ReadingTime = styled.h5`
//   display: inline;
//   color: #606060;
// `

// const Blog = ({ data }) => {
//   return (
//     <Layout>
//       <SEO title="Blog" />
//       <Content></Content>
//     </Layout>
//   )
// }

// export default Blog

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { draft: { eq: false } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//             path
//           }
//           fields {
//             slug
//             readingTime {
//               text
//             }
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `
