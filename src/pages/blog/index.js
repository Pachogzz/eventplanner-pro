import React from 'react'
import Layout from '../../components/Layout'
import { blog } from "../../styles/blog.module.css"

export default function Blog() {
  return (
    <Layout>
      <div className={blog}>
        <h2>Blog</h2>
        <h3>Id labore est amet nisi consequat nostrud sint voluptate pariatur enim proident velit Lorem.</h3>
      </div>
    </Layout>
  )
}
