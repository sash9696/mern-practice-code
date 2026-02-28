// jsx


// props
// data being passed from parent to child component 

// function Greeting(props){
//   return <h2>hello {props.name}</h2>
// }

// export default function App(){

//   return (
//     <div>
//       <Greeting name='John' />
//       <Greeting name='Peter' />
//     </div>
//   )
// }


function ProductCard({title , price}){
    return (
      <div>
        <h3>{title}</h3>
        <p>₹{price}</p>
      </div>
    )
  }
  
  export default function App(){
  
    return (
      <div>
        <ProductCard title='iphone 16' price={100000} />
        <ProductCard title='Macbook' price={200000}  />
      </div>
    )
  }