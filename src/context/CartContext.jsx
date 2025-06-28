import React, { createContext, useState } from "react";
export const CartContext=createContext()

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);


const addToCart=(product)=>{
    setCart([...cart,product]);
}

const removeCart=(id)=>{
    setCart(cart.filter(item=>item.id !==id));
};

return(
    <CartContext.Provider value={{cart,addToCart,removeCart}}>
    {children}
    </CartContext.Provider>
);
};