/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"

const RepositoryHeader = ({ repo }) => {
  return (
    <Styled.div
      sx={{
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <Styled.h3
        sx={{
          display: `flex`,
          justifyContent: `space-between`,
          marginBottom: 0,
          fontSize: `text.heading`,
        }}
      >
        <a
          href={`https://github.com${repo.resourcePath}`}
          target="_blank"
          sx={{ color: `link` }}
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
      </Styled.h3>
    </Styled.div>
  )
}

export default RepositoryHeader
