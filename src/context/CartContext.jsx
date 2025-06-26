import { useEffect } from "react";

export const cartContext=createContext();
export const cartProvider=([children])=>{
    const [cart,setCart]=usestate(()=>{
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart):[];
    });

    useEffect=(()=>{
        localStorage.setItem('cart',JSON.stringify(cart));
    },[cart]);

    const addTocart=(product)=>{
        setCart([...cart,product]);
    };

    const removeCart=(product)=>{id}=>{
        setCart(cart.filter(item=>item.id !==id));
    
};