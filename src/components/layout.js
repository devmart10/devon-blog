import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  let container = {
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: rhythm(24),
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
        backgroundColor: `black`,
        padding: rhythm(1),
      }}
    >
      <div style={{ ...container }}>
        <div
          style={{
            display: `flex`,
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
        </div>
      </div>
    </h3>
  )

  let footer = (
    <div
      style={{
        backgroundColor: `lightgrey`,
        padding: rhythm(1),
        marginTop: rhythm(2),
      }}
    >
      <div style={{ ...container }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </div>
  )

  return (
    <div>
      <header>{header}</header>
      <main style={{ ...container }}>{children}</main>
      <footer>{footer}</footer>
    </div>
  )
}

export default Layout
