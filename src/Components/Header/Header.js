import './Header.css'
const Header = () => {
    return (
        <header className="header">
                <div className="header-logo">
                      <h1>logo</h1>
                      <h1>eShop</h1>
                </div>

                <div className="header-search">
                    <input type="text" name= "search" placeholder="Search" />

                </div>

                <div className="header-nav"> 
                     <div className="header-nav-signin">

                     </div>

                     <div className="header-nav-your-shop">

                     </div>
                    <div  className="header-nav-cart">

                    </div>
                </div>
        </header>
    );
}

export default Header;