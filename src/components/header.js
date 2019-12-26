import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Container } from "./layout"

const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: white;
`

const PageLink = styled(HeaderLink)`
  margin-left: 1.75rem;
  font-size: 1rem;
`

const TitleLink = styled(HeaderLink)`
  margin-right: auto;
  font-size: 1.75rem;
`

const Heading = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  background-color: black;
  padding: 1rem 0;
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Header = ({ title }) => {
  return (
    <header>
      <Heading>
        <Container>
          <FlexWrapper>
            <TitleLink to={`/`}>{title}</TitleLink>
            <PageLink to={`/blog`}>Blog</PageLink>
            <PageLink to={`/projects`}>Projects</PageLink>
            <PageLink to={`/about`}>About</PageLink>
          </FlexWrapper>
        </Container>
      </Heading>
    </header>
  )
}

export default Header
