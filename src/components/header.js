/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { useColorMode } from "theme-ui"
import ColorModeToggle from "./colorModeToggle"
import NavLink from "./navLink"

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <div
      sx={{
        margin: "0px",
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 1.0875rem",
        fontSize: "1.2rem",
        variant: `dividers.bottom`,
        alignItems: `center`,
        justifyContent: `space-between`,
        mt: 3,
        color: `secondary`,
        a: { color: `secondary`, ":hover": { color: `toggleIcon` } },
        flexFlow: `wrap`,
      }}
    >
      <div>
        <NavLink homeLink to="/" darkmode={isDark ? 1 : 0} text="Home" />
        <NavLink darkmode={isDark ? 1 : 0} to="/blog" text="Blog" />
        <NavLink darkmode={isDark ? 1 : 0} to="/github" text="Github" />
      </div>
      <ColorModeToggle darkmode={isDark ? 1 : 0} toggle={toggleColorMode} />
    </div>
  )
}

export default Header
