import React from "react"
import colors from "../../utils/colors"
import { rhythm } from "../../utils/typography"

const Section = ({ children }) => {
  return (
    <section
      style={{
        backgroundColor: colors.mediumGray,
        padding: rhythm(1),
        borderRadius: rhythm(1 / 2),
        marginBottom: rhythm(1),
      }}
    >
      {children}
    </section>
  )
}

export default Section
