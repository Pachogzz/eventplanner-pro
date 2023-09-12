import React from 'react'
import Layout from '../../components/Layout'
import { blog } from "../../styles/blog.module.css"
import { b_item } from "../../styles/blog.module.css"
import { Link, graphql } from 'gatsby'

export default function Blog({data}) {
  console.log(data)
  const blogs = data.blogs.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={blog}>
        <h2>Blog</h2>
        <h3>Id labore est amet nisi consequat nostrud sint voluptate pariatur enim proident velit Lorem.</h3>
        <div className={b_item}>
          {blogs.map(blog =>(
            <Link to={"/blog/" + blog.slug} key={blog.id}>
              <div>
                <h3>{blog.frontmatter.title}</h3>
                <p>{blog.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you read? Email your content at: {contact}</p>
      </div>
    </Layout>
  )
}

// esport page query
export const query = graphql`
query BlogPage {
  blogs: allMarkdownRemark {
    nodes {
      frontmatter {
        title
        stack
        slug
      }
      id
    }
  }
  contact: site {
    siteMetadata{
      contact
    }
  }
}
`