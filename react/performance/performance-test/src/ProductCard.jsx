import React from 'react'

function ProductCard({product}) {

    console.log('Rendering', product.title)
  return (
    <div style={{
        border:'1px solid gray',
        margin:'10px',
        padding:'10px',
    }} >

        <h4>{product.title}</h4>

        <img src={product.image} width="60"/>

        <p>${product.price}</p>
        
    </div>
  )
}

export default React.memo(ProductCard)