import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
    showCart: PropTypes.func,
};

Header.defaultsProps = {
    showCart: null,
};

function Header(props) {
    const {showCart} = props;

    function showCartModal(){
        showCart();
    }
    return (
        <div className="header">
           <nav>
               <div className="logo">
                   <p>ShopCart</p>
               </div>
               <div className="cart">
                   <p onClick={()=>showCartModal()}>Cart <i className="fas fa-shopping-cart"></i></p>
                   <span className="quantity">0</span>
               </div>
           </nav>
        </div>
    );
}

export default Header;