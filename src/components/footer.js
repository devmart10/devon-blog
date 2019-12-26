import React from "react"
import styled from "styled-components"

import { Container } from "./layout"

const Background = styled.footer`
  background-color: lightgrey;
  padding: 1rem 0;
  margin-top: 2rem;
`

const Footer = () => {
  return (
    <Background>
      <Container>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Container>
    </Background>
  )
}

export default Footer
