import React from 'react';
import PropTypes from 'prop-types';

Body.propTypes = {
    product: PropTypes.array,
};

Body.defaultsProps = {
    product: null,
};
function Body(props) {
    const {products} = props;
    
    return (
        <div className="box-container">
            {products !== null && products.map((product) =>{
                return <div className="box">

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
                                <button className="btn">Add to Cart</button>
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