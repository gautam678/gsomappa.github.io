import React from "react"
import Octicon, { Law, Star } from "@githubprimer/octicons-react"

const FooterItem = ({ children }) => (
  <span style={{ marginRight: 16 }}>{children}</span>
)

const RepositoryFooter = ({ repo }) => {
  const language = repo.languages.edges[0].node
  const timeAgo = new Date(repo.updatedA) - new Date()
  const daysAgo = Math.floor(timeAgo / (1000 * 60 * 60 * 24)) // ms to days
  let updatedAt = repo.updatedAt.slice(0, 10)

  if (daysAgo > -21) {
    updatedAt = new Intl.RelativeTimeFormat("en", { style: "narrow" }).format(
      daysAgo,
      "day"
    )
  }
  return (
    <div style={{ color: `#586069`, fontSize: 12, paddingTop: 5 }}>
      <FooterItem>
        <span
          style={{
            borderRadius: `50%`,
            display: `inline-block`,
            height: 12,
            position: `relative`,
            top: 1,
            width: 12,
            backgroundColor: language.color,
          }}
        />{" "}
        {language.name}
      </FooterItem>
      <FooterItem>
        <Octicon icon={Star} />
        {repo.stargazers.totalCount}{" "}
      </FooterItem>
      {repo.licenseInfo && (
        <FooterItem>
          <Octicon icon={Law} /> {repo.licenseInfo.name}
        </FooterItem>
      )}
      <FooterItem>Updated: {updatedAt}</FooterItem>
      {repo.homepageUrl && <FooterItem />}{" "}
    </div>
  )
}
export default RepositoryFooter
