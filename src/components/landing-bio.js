/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5%;
  justify-content: space-between;
  flex-direction: row;
  align-content: center;
  height: 60vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 600px;
`

const RightContainer = styled(Container)`
  margin-top: -20px;
  margin-bottom: 20px;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`
const NameHeader = styled.h1`
  font-family: Rubik;
  vertical-align: middle;
  font-size: 1.5rem;
  margin-bottom: 0;
  white-space: pre-wrap;
`

const LandingBio = ({ fluid }) => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <Img
            sx={{
              border: "5px solid",
              borderColor: `text`,
              borderRadius: "100%",
              width: "225px",
              height: "225px",
              transition: "0.3s",
              "&:hover": {
                borderColor: `profileBorder`,
              },
            }}
            fluid={fluid}
          />
          <div sx={{ variant: `dividers.bottom` }}>
            <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          </div>
          <Description>{data.site.siteMetadata.subtitle}</Description>
        </Container>
        <RightContainer>
          <h1 sx={{ textAlign: "left" }}>
            Hi there! I am a software developer working for{" "}
            <a
              sx={{
                textDecoration: "none",
                color: `link`,
                "&:hover": { color: `altLink` },
              }}
              href="https://www.walmartlabs.com/"
              target="_blank"
            >
              Walmart Labs
            </a>
            . I'm passionate about all things programming.
          </h1>
          <div sx={{ variant: `dividers.bottom`, paddingBottom: "17%" }}></div>
        </RightContainer>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
