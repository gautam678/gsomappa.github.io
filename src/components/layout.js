/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { jsx } from "theme-ui"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
            margin: "0",
          }}
        >
          <div sx={{ gridArea: "1 / 2 / -1 / 6", fontFamily: `body` }}>
            <Header />
            <div
              sx={{
                display: "flex",
                minHeight: "79vh",
                margin: "0px",
                maxWidth: "860px",
                padding: "1.45rem 1.0875rem",
                paddingTop: "0px",
              }}
            >
              <main css={{ flex: "1 0 auto" }}>{children}</main>
            </div>
            <footer
              sx={{
                display: "flex",
                color: `footer`,
                paddingBottom: "10px",
                left: "0%",
                flexShrink: "0",
                justifyContent: "center",
                width: "100%",
              }}
            >
              © {new Date().getFullYear()} Made with{" "}
              <span sx={{ color: "#e25555" }}>&hearts;</span> by Gautam Somappa
            </footer>
          </div>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
