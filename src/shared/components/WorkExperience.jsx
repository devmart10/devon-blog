import React from "react"
import { rhythm } from "../../utils/typography"

const dateStyle = {
  textDecoration: "underline",
}

const WorkExperience = ({ company, role, date, children }) => {
  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: rhythm(1),
          marginBottom: rhythm(1 / 2),
        }}
      >
        <span>
          <strong>{company}</strong> - {role}
        </span>
        <span
          style={{
            textDecoration: "underline",
            fontSize: ".8rem",
          }}
        >
          {date}
        </span>
      </div>
      <p style={{ marginBottom: rhythm(2) }}>{children}</p>
    </section>
  )
}

export default WorkExperience
