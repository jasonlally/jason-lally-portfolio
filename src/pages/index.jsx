import React from 'react'
import Helmet from 'react-helmet'
import { graphql, withPrefix } from 'gatsby'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Sidebar from '../components/Sidebar'
import Section from '../components/Section'
import Unit from '../components/Unit'

import fullResume from '../pages/jason_lally_resume.pdf'
import ccsf from '../assets/images/ccsf.png'
import pm from '../assets/images/pm.png'
import interfaceLogo from '../assets/images/interface.png'

class IndexRoute extends React.Component {
  render() {
    const items = []
    const { title, subtitle, author } = this.props.data.site.siteMetadata
    const posts = this.props.data.allMarkdownRemark.edges
    posts.forEach(post => {
      console.log(post)
      const data = post.node.frontmatter
      const img = data.image ? data.image.childImageSharp.resize.src : ccsf
      items.push(<Unit
        image={img}
        imageSize="cover"
        color="#FFF"
        line1={data.title}
        description={data.description}
        key={post.node.fields.slug}
        link={post.node.fields.slug}
      />)
    })

    return (
      <Layout>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <Intro author={author} />
            <Section title="Experience">
              <Unit
                image={ccsf}
                color="#FFF"
                line1="Data Services Manager"
                line2="City and County of San Francisco"
                line3="Oct 2017 - Present"
                link="https://www.datasf.org"
                description="Oversee data analytics, data science and engineering programs and strategic direction of enterprise data services offered by DataSF."
              />
              <Unit
                image={ccsf}
                color="#FFF"
                line2="Mayor's Office of San Francisco"
                line1="Open Data Program Manager"
                link="https://www.datasf.org"
                line3="Aug 2014 - Oct 2017"
                description="Matured the City's Open Data Program including engineering practices, standards, processes and documentation. Implemented continuous improvement."
              />
              <Unit
                image={ccsf}
                color="#FFF"
                line2="Mayor's Office of San Francisco"
                line1="Mayor's Innovation Fellow"
                link="https://www.innovation.sfgov.org/"
                line3="Aug 2013 - Aug 2014"
                description="Worked on a variety of innovation and data-related projects with City departments based on the Mayor's priorities."
              />
              <Unit
                image={pm}
                color="#FFF"
                line2="PlaceMatters"
                line1="Director of the Decision Lab"
                link="https://www.radianinc.org/place-matters/"
                line3="Oct 2009 - Aug 2013"
                description="Directed PlaceMatters' client-facing technology program to apply existing and emerging technologies in novel ways to urban planning and sustainability practices. Built up technology patterns to use across projects."
              />
              <Unit
                image={pm}
                color="#FFF"
                line2="PlaceMatters"
                line1="Planning Technology Associate"
                link="https://www.radianinc.org/place-matters/"
                line3="Jan 2008 - Oct 2009"
                description="Provided technology development and support to urban planning and sustainability projects for clients of PlaceMatters."
              />
              <Unit
                image={interfaceLogo}
                color="#f68125"
                line2="Interface Studio"
                line1="Planner/Urban Designer"
                link="https://interface-studio.com"
                line3="Jan 2007 - Jan 2008"
                description="On a part-time basis during graduate school, contributed design, technology and analytical support to client urban planning projects. This included design work in Photoshop and Illustrator and analytical work in ArcGIS."
              />
            </Section>
            <a
              rel="noopener noreferrer"
              href={withPrefix('/jason_lally_resume.pdf')}
              target="_blank"
            >
              Download full resume
            </a>
            <Section title="Projects">
              { items }
            </Section>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          linkedin
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
            image {
              childImageSharp {
                resize(width: 400) {
                  src
                }            
              }
            }
          }
        }
      }
    }
  }
`
