import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Section from "../shared/components/Section"
import WorkExperience from "../shared/components/WorkExperience"

class ProjectsPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Section>
          <h1>Here's what I'm working on</h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devmart10/"
          >
            GitHub
          </a>
          <WorkExperience
            company="BugTracker"
            role="Simple issue tracking with authentication"
            date="Jan. 2020 - Present"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error
            cumque possimus asperiores, at qui necessitatibus voluptatem sed ad
            libero cupiditate magni atque autem, enim quia amet expedita. Itaque
            autem explicabo quod fuga soluta! Labore eveniet enim et doloremque
            officiis laborum rerum explicabo atque iusto, consequuntur quo
            provident, praesentium quos?
          </WorkExperience>
          <WorkExperience
            company="Todoist Clone"
            role="Recreate the impressive functionality of Todoist"
            date="Oct. 2019 - Present"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            magnam ipsa quaerat aut fuga recusandae quis nulla officiis harum!
            Amet dignissimos consequatur quo optio excepturi neque ducimus
            architecto quisquam illo, quos accusamus qui! Molestiae expedita
            maxime, a, corrupti ullam reprehenderit nisi error quibusdam
            voluptates, illo suscipit? Nisi, ex, cum illo asperiores ipsa modi
            hic ipsum culpa deleniti facere praesentium nam eveniet? Repudiandae
            minus a eaque vel doloribus nam suscipit modi.
          </WorkExperience>
        </Section>
      </Layout>
    )
  }
}

export default ProjectsPage

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
