import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <h1>Event Planner Pro</h1>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  )
}
