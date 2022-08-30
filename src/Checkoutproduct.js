import React from 'react';

import "./Checkoutproduct.css"

const CheckoutProduct = ({id, image,title,price,rating})  => {
    return (
        <div className="checkoutproduct">
                
                   <img src={image} alt="" className="checkoutproduct-image" />
                   <div className="checkoutproduct-info">
                    <p className="checkoutproduct-title">
                        {title}
                    </p>
                    <p className="checkoutproduct-price">
                            <small>$</small>
                            <strong>{price}</strong>
                    </p>
                    <div className="checkoutproduct-rating">
                        {Array(rating)
                            .fill()
                            .map((_,i) =>(
                                <p>⭐️</p>
                            ))}
                    </div>
                    <button> remove form the basket</button>
                   </div>
                
            </div>
       
    )
}
export default CheckoutProduct;