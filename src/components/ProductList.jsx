// // import React, { useContext, useEffect, useState } from "react";
// // import { CartContext } from "../context/CartContext";
// // import { useSearchParams } from "react-router-dom";

// // function ProductList(){
// //     const {addToCart} =useContext(CartContext);
// //     const[items,setItems]=useState([]);

// //     useEffect(()=>{
// //         fetch('https://fakestoreapi.com/products')
// //         .then(res=>res.json())
// //         .then(data=>{setItems(data)});
// //     },[]);

// //     return(
// //        <div className="product-list">
// //       <h2>Products</h2>
// //       {div className="product-grid"}
// //       {items.map(item => (
// //         <div key={item.id} className="product-card">
// //             <img src={item.image} alt={items.title} className="product-image"></img>
// //           <h3 className="product-title">{item.title}</h3>
// //            <p className="product-price">{item.price}₹{Math.floor(item.price * 80)}<p/>
// //           <button className="add-btn" onClick={() => addToCart({ id: item.id, title: item.title, price: Math.floor(item.price * 80) })}>
// //             Add to Cart
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //     </div>
// //     );
// // }

// // export default ProductList;



// import React, { useEffect, useState, useContext } from 'react';
// import { CartContext } from '../context/CartContext';

// function ProductList() {
//   const { addToCart } = useContext(CartContext);
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(data => {
//         setItems(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading products...</p>;

//   return (
//     <div className="product-list">
//       <h2>Products</h2>
//       <div className="product-grid">
//         {items.map(item => (
//           <div key={item.id} className="product-card">
//             <img src={item.image} alt={item.title} className="product-image" />
//             <h3 className="product-title">{item.title}</h3>
//             <p className="product-price">₹{Math.floor(item.price * 80)}</p>
//             <button className="add-btn" onClick={() => addToCart({
//               id: item.id,
//               title: item.title,
//               price: Math.floor(item.price * 80)
//             })}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;

import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductList() {
  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="product-grid">
        {items.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} className="product-image" />
            <h3 className="product-title">{item.title}</h3>
            <p className="product-price">₹{Math.floor(item.price * 80)}</p>
            <button className="add-btn" onClick={() => addToCart({
              id: item.id,
              title: item.title,
              image:item.image,
              price: Math.floor(item.price * 80)
            })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;