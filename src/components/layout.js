import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

import Header from "./header"
import Footer from "./footer"

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 0 1rem;
`

const Main = styled(Container)``

const Layout = ({ title, children }) => {
  return (
    <>
      <Header title={title}></Header>
      <Container as="main">{children}</Container>
      <Footer></Footer>
    </>
  )
}

export default Layout
