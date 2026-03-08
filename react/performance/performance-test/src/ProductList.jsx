import React, {useMemo} from "react";
import ProductCard from "./ProductCard";

function slowCalculation(){
    let total = 0;

    for (let i = 0; i < 600000000; i ++){
        total += i;
    }

    return total;
}

function ProductList({ products, search }) {

    // useMemo
//   const filteredProducts = products.filter(p =>
//     p.title.toLowerCase().includes(search.toLowerCase())
//   );

const filteredProducts = useMemo(() => {
    console.log('Filtering products')

    return products.filter(p => 

        p.title.toLowerCase().includes(search.toLowerCase())
    )

    // now filtering only runds when dependencies changes
}, [products,search])


// memoize the function then u can use use Callback

// virtualization (react-window, react-virtualized, tanstack virtual)
// example
//if we have 2000 products => react has to manage 2000 dom nodes
// virtualization show only 10-15 visible items




// js memoization
// pagination
// Api caching 
// debounced search

  slowCalculation();

  return (
    <div>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
