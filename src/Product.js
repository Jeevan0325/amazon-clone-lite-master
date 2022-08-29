import React from 'react';
import './Product.css';

const Product = () => {
    return (
       
            <div className="product">
                <div className="product-info">
                    <p>Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling office Bag,Water repeilent Fabric for Men and Women(Blue)</p>
                    <p className="product-price">
                        <small>$</small>
                        <strong>11.98</strong>
                    </p>
                    <div className="product-rating">⭐️ ⭐️</div>
                </div>
                <img src="https://m.media-amazon.com/images/I/51S-b58EREL._SL500_.jpg" alt="" className="product-image"/>
                <button>Add to Basket</button>
            </div>
       

    )
}
export default Product;