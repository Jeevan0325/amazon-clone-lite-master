import React from 'react';

import "./Checkoutproduct.css"

const CheckoutProduct = () => {
    return (
        <div className="checkoutproduct">
                
                   <img src="https://m.media-amazon.com/images/I/51S-b58EREL._SL500_.jpg" alt="" className="checkoutproduct-image" />
                   <div className="checkoutproduct-info">
                    <p className="checkoutproduct-title">
                        title
                    </p>
                    <p className="checkoutproduct-price">
                            <small>$</small>
                            <strong>32</strong>
                    </p>
                    <div className="checkoutproduct-rating">
                            ⭐️ ⭐️
                    </div>
                    <button> remove form the basket</button>
                   </div>
                
            </div>
       
    )
}
export default CheckoutProduct;