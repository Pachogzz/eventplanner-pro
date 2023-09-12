import * as React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { header } from "../styles/home.module.css"
import { btn } from "../styles/home.module.css"

export default function Home() {

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Home</h2>
          <h3>Event Planner Pro</h3>
          <p>Lorem Ipsum</p>
          <Link to="/blog" className={btn}>Read the Blog</Link>
        </div>
        <img src="/banner.png" alt="Site banner" style={{maxWidth: '100%'}} />
      </section>
    </Layout>
  )
}
