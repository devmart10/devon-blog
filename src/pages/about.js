import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../shared/components/Title"
import Section from "../shared/components/Section"
import WorkExperience from "../shared/components/WorkExperience"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

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
          <WorkExperience
            company="Chevron"
            role="Software Engineer"
            date="January 2019 - Present"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            veritatis consectetur vero accusantium sed! Aliquid aperiam hic
            provident rerum non, quo similique beatae in. Ea soluta quasi
            nesciunt enim, molestias repellendus rerum sapiente consequatur modi
            corrupti laudantium quam quod consectetur.
          </WorkExperience>
          <WorkExperience
            company="Restoration Robotics"
            role="Software Engineer - Intern"
            date="June 2018 - Sept. 2018"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            dolorum, magnam excepturi consequuntur quibusdam natus enim
            voluptatibus totam tenetur accusamus nemo labore saepe ratione porro
            pariatur ipsum rem numquam unde nisi qui. Perspiciatis eaque
            similique consequuntur, culpa porro animi error sit nam ipsam
            aperiam numquam velit dolorem voluptates alias reiciendis!
          </WorkExperience>
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
  }
`
