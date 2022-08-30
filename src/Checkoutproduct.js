import React from 'react';

import Checkout from './Checkout';
import "./Checkoutproduct.css"
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, image,title,price,rating})  => {
    
    const [ { basket },dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch ({
            type : "REMOVE_FROM_BASKET",
            id : id,

        })
    }
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
                    <button onClick={ removeFromBasket} > remove form the basket</button>
                   </div>
                
            </div>
       
    )
}
export default CheckoutProduct;