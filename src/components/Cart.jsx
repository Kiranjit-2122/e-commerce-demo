// // import React, { useContext, useState } from 'react';
// // import { CartContext } from "../context/CartContext";

// // function Cart(){
// //     const {cart,removeFromcart}=useContext(CartContext);
// //     return(
// //         <div className="cart">
// //       <h2>Cart</h2>
// //       {cart.length === 0 ? <p>No items in cart.</p> : null}
// //       {cart.map(item => (
// //         <div key={item.id} className="cart-item">
// //           <p className="cart-title">{item.title}</p>
// //           <p className="cart-price">₹{item.price}</p>
// //           <button className="remove-btn" onClick={() => removeFromcart(item.id)}>Remove</button>
// //         </div>
// //       ))}
// //       <p className="card-total"><strong>Total:</strong>₹{total}</p>
// //     </div>
// //     );
// // }

// // export default Cart;
// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';

// function Cart() {
//   const { cart, removeFromCart } = useContext(CartContext);

//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       {cart.length === 0 ? <p>No items in cart.</p> : (
//         <>
//           {cart.map(item => (
//             <div key={item.id} className="cart-item">
//               <p className="cart-title">{item.title}</p>
//               <p className="cart-price">₹{item.price}</p>
//               <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
//             </div>
//           ))}
//           <p className="cart-total"><strong>Total:</strong> ₹{total}</p>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>No items in cart.</p> : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <p className="cart-title">{item.title}</p>
              <p className="cart-price">₹{item.price}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <p className="cart-total"><strong>Total:</strong> ₹{total}</p>
        </>
      )}
    </div>
  );
}

export default Cart;
