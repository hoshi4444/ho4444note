import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/style.module.css"


export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="home" />
      <div className={styles.contents}>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div
            className={styles.contentsList}
          >
            <Link to={node.slug} 
            className={styles.contentsTitle}
            >
              <h1>{node.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date],order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          categories {
            name
            slug
          }
        }
      }
    }
  }
`