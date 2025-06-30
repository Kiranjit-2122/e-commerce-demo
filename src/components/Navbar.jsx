import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){
    return (
        <nav className="navbar">
            <h2 className="logo"> ShopSmart</h2>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Product List</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    )
}
export default Navbar;