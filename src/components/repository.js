import React from "react"

import RepositoryFooter from "./repositoryFooter"
import RepositoryHeader from "./repositoryHeader"
import RepositoryDescription from "./repositoryDescription"

import { jsx } from "theme-ui"
const Repository = ({ repo }) => {
  return (
    <div
      sx={{
        borderBottom: `1px solid #e1e4e8`,
        marginBottom: `1rem`,
        padding: `1rem`,
        fontSize: 16,
      }}
    >
      <RepositoryHeader repo={repo} />
      <RepositoryDescription repo={repo} />
      <RepositoryFooter repo={repo} />
    </div>
  )
}

export default Repository
