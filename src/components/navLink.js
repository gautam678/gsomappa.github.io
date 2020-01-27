/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const NavLink = ({ homeLink, to, darkmode, text }) => {
  return (
    <Link
      sx={{
        color: `toggleIcon`,
        marginLeft: homeLink ? "0px" : "15px",
        textDecoration: "none",
        display: "inline-block",
        position: "relative",
        "::after": {
          content: '""',
          position: "absolute",
          width: "100%",
          transform: "scaleX(0)",
          height: "2px",
          bottom: "0px",
          left: "0px",
          backgroundColor: `toggleIcon`,
          transformOrigin: "bottom right",
          transition: "transform 0.4s cubic-bezier(0.86, 0, 0.07, 1)",
        },
        ":hover::after": {
          transform: "scaleX(1)",
          transformOrigin: "bottom left",
        },
      }}
      to={to}
      darkmode={darkmode}
    >
      {text}
    </Link>
  )
}

export default NavLink
