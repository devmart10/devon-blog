import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Title from "../shared/components/Title"
import Section from "../shared/components/Section"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <Section>
          <Title>About</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus
            cum eos rem cupiditate nihil illo assumenda aperiam maiores officia.
            Expedita quidem quod magnam quaerat, incidunt officia praesentium
            nobis sunt ex cum rerum eveniet natus veritatis perferendis alias
            quam. Reiciendis vero amet aliquam excepturi rem ad provident
            molestiae laboriosam optio et. Officiis aliquam possimus dicta nam
            blanditiis natus accusamus tempora!
          </p>
        </Section>
        <Section>
          <Title>Resume</Title>
          <h2>Summary of Qualifications</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus
            cum eos rem cupiditate nihil illo assumenda aperiam maiores officia.
            Expedita quidem quod magnam quaerat, incidunt officia praesentium
            nobis sunt ex cum rerum eveniet natus veritatis perferendis alias
            quam. Reiciendis vero amet aliquam excepturi rem ad provident
            molestiae laboriosam optio et. Officiis aliquam possimus dicta nam
            blanditiis natus accusamus tempora!
          </p>
          <h2>Work Experience</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            veritatis consectetur vero accusantium sed! Aliquid aperiam hic
            provident rerum non, quo similique beatae in. Ea soluta quasi
            nesciunt enim, molestias repellendus rerum sapiente consequatur modi
            corrupti laudantium quam quod consectetur.
          </p>
        </Section>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
