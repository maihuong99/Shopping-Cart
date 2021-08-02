import React from 'react';

function Header() {
    return (
        <div className="header">
           <nav>
               <div className="logo">
                   <p>ShopCart</p>
               </div>
               <div className="cart">
                   <p>Cart <i className="fas fa-shopping-cart"></i></p>
                   <span className="quantity">0</span>
               </div>
           </nav>
        </div>
    );
}

export default Header;