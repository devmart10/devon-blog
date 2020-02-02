import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../shared/components/Title"
import Section from "../shared/components/Section"

import Prism from "prismjs"

const code = `
const name = 'Devon Martin'; 
const jobTitle = 'Software Engineer';
const email = 'devmart10@gmail.com';
const phone = '(925) 348-2316';
const location = 'San Jose';

/* Socials */ 
const github = 'devmart10@github.com';
const twitter = '@devmart10';
const linkedin = 'devon.martin@linkedin.com';
`.trim()

const ContactPage = ({ data, location }) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <Section>
        <Title>Contact</Title>
        <pre className="language-javascript">
          <code className="language-javascript">{code}</code>
        </pre>
      </Section>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
