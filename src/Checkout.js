import React from 'react';
import './Checkout.css';
import Checkoutproduct from './Checkoutproduct.js';
import Subtotal from './Subtotal';
import { useStateValue}   from './StateProvider';

const Checkout = () => {
    const [{basket},dispatch] = useStateValue(); 
    return (
        <div className="checkout">
            <div className="checkout-right">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout-ad" />
                <div>
                    <h2 className="checkout-title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item =>{
                        <Checkoutproduct
                            id = {item.id}
                            title = {item.title}
                            images = {item.images}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    })};
                </div>
                
            </div>
            <div className="checkout-left">
                    <Subtotal />
            </div>
        </div>
   )
}
export default Checkout;