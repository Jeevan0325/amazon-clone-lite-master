import React from 'react';
import './Header.css'
import { BsShopWindow } from "react-icons/bs"
import { MdOutlineShoppingBasket } from "react-icons/md"
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


const Header = () => {
    const [{basket},dispatch] = useStateValue();
    return (
        <header className="header">
            <Link to ="/" style={{textDecoration: "none"}}>
                <div className="header-logo">
                      <BsShopWindow className="header-logo-container"></BsShopWindow>
                      <h2 className="header-logo-title">eShop</h2>
                </div>

            </Link>
                
                <div className="header-search">
                    <input className="header-searchbar" type="text" name= "search" placeholder="Search"></input>

                        <div>    
                            <BiSearchAlt2 className="header-search-logo"></BiSearchAlt2>
                        </div>
                </div>

                <div className="header-nav"> 
                     <div className="header-nav-signin">
                            <span className="header-nav-signin-text">Hello guest</span>
                            <span className="header-nav-signin-title">Sign In</span>
                     </div>

                     <div className="header-nav-your-shop">
                            <span className="header-nav-your-shop-text">your</span>
                            <span className   = "header-nav-your-shop-title">Shop</span>
                     </div>
                     <Link to ="/Checkout" style ={{textDecoration: "none"}}>
                     <div  className="header-nav-cart">
                            <MdOutlineShoppingBasket className="header-nav-cart-logo"></MdOutlineShoppingBasket>
                            <span className="header-nav-cart-count">{basket.length}</span>
                    </div>
                     </Link>
                    
                </div>
        </header>
    );
}

export default Header;
