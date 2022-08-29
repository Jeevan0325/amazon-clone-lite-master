import './Header.css'
import { BsShopWindow } from "react-icons/bs"
import { MdOutlineShoppingBasket } from "react-icons/md"
import { BiSearchAlt2 } from "react-icons/bi";
const Header = () => {
    return (
        <header className="header">
                <div className="header-logo">
                      <BsShopWindow className="header-logo-container"></BsShopWindow>
                      <h2 className="header-logo-title">eShop</h2>
                </div>

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
                    <div  className="header-nav-cart">
                            <MdOutlineShoppingBasket className="header-nav-cart-logo"></MdOutlineShoppingBasket>
                            <spam className="header-nav-cart-count">0</spam>
                    </div>
                </div>
        </header>
    );
}

export default Header;