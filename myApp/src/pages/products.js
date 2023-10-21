import React from 'react'
import { Link } from 'gatsby'
const products = () => {
  return (
    <div>
      <h2>Products</h2>
      <Link to="/">Home</Link>
        <Link to="/about">Products</Link>
    </div>
  )
}

export default products
