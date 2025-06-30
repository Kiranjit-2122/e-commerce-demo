import React from "react";
import './About.css';
function About(){
    return(
        <div className="about-container">
            <div className="about-content">
                <h1>About SmartShop!!</h1>
                <h5>Smartshop is simple yet modern e-commerce app created using react and context API.
                    It is designed to demonstrate how cart functionality,routing and component management
                    can be achieved in a single-page application.
                </h5>
                <div className="features">
                    <h2>Features :</h2>
                    <ul>
                        <li>🛒 Add & remove products from cart</li>
                        <li>📦 Dynamic product list from Fake Store API</li>
                        <li>📱 Fully responsive layout</li>
                        <li>⚛️ Context API for global state management</li>
                        <li>💻 Built with Vite + React</li>
                    </ul>
                </div>
                        <p className="thank-you">Thank you for visiting ShopSmart. Happy shopping! 😊</p>
            </div>
        </div>
    )
}

export default About;