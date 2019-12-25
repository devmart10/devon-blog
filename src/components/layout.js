import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  let container = {
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: rhythm(24),
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
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `white`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </div>
    </h3>
  )

  let footer = (
    <div
      style={{
        backgroundColor: `lightgrey`,
        padding: rhythm(1),
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
