import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import colors from "../utils/colors"

const Layout = ({ location, title, children }) => {
  let container = {
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: rhythm(34),
  }

  let linkStyle = {
    boxShadow: `none`,
    textDecoration: `none`,
    color: `white`,
    marginLeft: rhythm(1),
    ...scale(0.01),
  }

  let titleStyle = {
    boxShadow: `none`,
    textDecoration: `none`,
    color: `white`,
    marginRight: `auto`,
  }

  let header = (
    <h3
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0,
        backgroundColor: colors.mediumGray,
        padding: rhythm(1 / 2),
      }}
    >
      <div style={{ ...container }}>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <Link to={`/`} style={{ ...titleStyle }}>
            {title}
          </Link>
          <Link to={`/blog`} style={{ ...linkStyle }}>
            Blog
          </Link>
          <Link to={`/projects`} style={{ ...linkStyle }}>
            Projects
          </Link>
          <Link to={`/about`} style={{ ...linkStyle }}>
            About
          </Link>
          <Link to={`/contact`} style={{ ...linkStyle }}>
            Contact
          </Link>
        </div>
      </div>
    </h3>
  )

  let footer = (
    <div
      style={{
        backgroundColor: colors.mediumGray,
        padding: rhythm(1 / 4),
        marginTop: rhythm(2),
      }}
    >
      <div style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} Devon Martin
      </div>
    </div>
  )

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <header>{header}</header>
      <main
        style={{
          padding: rhythm(1),
        }}
      >
        <div
          style={{
            ...container,
          }}
        >
          {children}
        </div>
      </main>
      <footer style={{ marginTop: "auto" }}>{footer}</footer>
    </div>
  )
}

export default Layout
