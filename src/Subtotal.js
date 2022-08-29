import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

const Subtotal = ( ) => {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) =>(
                    <>
                        <p>
                            Subtotal: (0 items): <strong>$0</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type="checkbox"  />This order containes a Gift
                        </small>
                        <button>Proceed to Checkout</button>
                    </>
                )}
                decimalScale = {2}
                value = {0}
                displayType = {"text"}
                thousandSeparator = {true}
                

            />

        </div>
    )
}
export default Subtotal;