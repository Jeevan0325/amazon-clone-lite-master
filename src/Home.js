import React from 'react';
import'./Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="home-container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home-image" ></img>
                    <div className="home-row">
                        <Product/>
                        <Product/>
                    </div>
                    <div className="home-row">
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                    <div className="home-row">
                        <Product/>
                    </div>
                </div>
            </div>
        </div>
    )
        
    
}
export default Home;