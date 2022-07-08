import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
        <div className="header_r">
        <Link className="logo" to="/"><h1>Blog Posts</h1></Link> 
        <Link className='btn-p cursor' to="/addpost">Add Post</Link>
        </div>
    </div>
  )
}

export default Header