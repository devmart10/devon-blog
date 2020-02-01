import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Section from "../shared/components/Section"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Section>
          <h2>A place for quality content</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            doloremque eligendi quisquam a nobis aut odio ea fugiat iste eum
            saepe omnis sequi incidunt, suscipit dolorem, minus voluptatum
            tempore? Officia deserunt cum, facilis dicta suscipit repellendus
            corporis. Modi, nesciunt ipsa debitis consequatur temporibus nulla
            voluptas totam natus quos perspiciatis minima.
          </p>
          <p>
            View the project on{" "}
            <a
              href="http://github.com/devmart10/devon-blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </Section>
        <Section>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            )
          })}
        </Section>
      </Layout>
    )
  }
}

export default BlogIndex

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
