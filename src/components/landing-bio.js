/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
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
  text-transform: uppercase;
  white-space: pre-wrap;
`

const IconList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 1rem;
`

const IconStyle = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin-top: 0.7rem;
  padding-left: 5%;
  color: headerText;
`

const LandingBio = ({ fluid }) => {
  const data = useStaticQuery(graphql`
    query LandingSiteTitleQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  return (
    <OuterContainer>
      <Container>
        <Img
          sx={{
            border: "5px solid",
            borderColor: `headerText`,
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
          <NameHeader sx={{ color: `headerText` }}>
            {data.site.siteMetadata.title}
          </NameHeader>
        </div>
        <Description sx={{ color: `headerText` }}>
          {data.site.siteMetadata.subtitle}
        </Description>
      </Container>
      <RightContainer>
        <h1 sx={{ textAlign: "left", color: `headerText` }}>
          Hi there! I am a software developer at{" "}
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
          . I'm passionate about building modern and highly scalable
          applications.
        </h1>
        <div
          sx={{
            variant: `dividers.bottom`,
            paddingBottom: "25%",
          }}
        ></div>
        <IconList>
          <IconStyle icon={faCoffee} />
          <IconStyle icon={faCoffee} />
          <IconStyle icon={faCoffee} />
          <IconStyle icon={faCoffee} />
          <IconStyle icon={faCoffee} />
          <IconStyle icon={faCoffee} />
        </IconList>
      </RightContainer>
    </OuterContainer>
  )
}

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
