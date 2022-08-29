import './Header.css'
import { BsShopWindow } from "react-icons/bs"
import { MdOutlineShoppingBasket } from "react-icons/md"
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Header = () => {
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
                            <spam className="header-nav-signin-text">Hello guest</spam>
                            <spam className="header-nav-signin-title">Sign In</spam>
                     </div>

                     <div className="header-nav-your-shop">
                            <spam className="header-nav-your-shop-text">your</spam>
                            <spam className   = "header-nav-your-shop-title">Shop</spam>
                     </div>
                     <Link to ="/Checkout" style ={{textDecoration: "none"}}>
                     <div  className="header-nav-cart">
                            <MdOutlineShoppingBasket className="header-nav-cart-logo"></MdOutlineShoppingBasket>
                            <spam className="header-nav-cart-count">0</spam>
                    </div>
                     </Link>
                    
                </div>
        </header>
    );
}

export default Header;
