import React from 'react'
import { useParams } from 'react-router-dom'



function ProductDetails() {
    const {productId} = useParams();
  return (
    <div>
        <h1>Product ID: {productId} </h1>
    </div>
  )
}

export default ProductDetails