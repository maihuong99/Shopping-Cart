import React from 'react';
import PropTypes from 'prop-types';

Body.propTypes = {
    product: PropTypes.array,
    onClick: PropTypes.func
};

Body.defaultsProps = {
    product: null,
    onClick: null
};
function Body(props) {
    const {products, onClick} = props;

    function addToCart(product, event){
        onClick(product, event.target);
        var target = event.target;
        target.innerHTML = "In Cart";
        target.disabled = true;
        
    }
    
    return (
        <div className="box-container">
            {products !== null && products.map((product) =>{
                return <div className="box" key={product.id}>

                    <div class="image">
                        <img src={product.image}  alt=""/>
                    </div>
                    <div class="info"> 
                        <h3>{product.title}</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half"></i>
                        </div>
                        <div className="row">
                            <div class="button">
                                <button className="btn" onClick={(event) => addToCart(product,event)}>Add to Cart</button>
                                <button className="btn">View</button>
                            </div>
                            <p className="price">${product.price}</p>
                        </div>
                        
                    </div>
                </div>
            })}
        </div>
    );
}

export default Body;