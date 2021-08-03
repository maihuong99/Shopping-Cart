import React from 'react';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react'


Modal.propTypes = {
    hideModal: PropTypes.func,
    items: PropTypes.array
};

Modal.defaultProps = {
    hideModal: null,
    items: null
};

function Modal(props) {
    const {hideModal, items, minus, add, clear, deleteProduct} = props;
    const [price, setPrice] = useState('');


    useEffect(()=>{
        var price = 0;
        for(let i=0; i<items.length; i++){
            price += items[i].price * items[i].number;
        }
        setPrice(price);
    },[items]);


    function minusItem(event, index){
        var target = event.target.parentElement.children[1];
        var value = parseInt(target.value);
        if(value > 1){
            minus(index);
        }
        target.value = items[index].number;
        
    }

    function addItem(event, index){
        var target = event.target.parentElement.children[1];
        target.value = items[index].number;
        add(index);

    }

    function clearProduct(){
        clear();
    }

    function deleteItem(index,id){
        deleteProduct(index,id);
    }

    
    return (
        <div className="modal">
            <div className="modal-content"> 
                <div class="modal-header">
                    <h3>Shopping Cart</h3>
                    <span class="close" onClick = {()=> hideModal()}>&times;</span>
                </div>
                <div class="modal-body">
                    <table>
                        {items !== null && items.map((item,index) =>{
                            return <tr key={index}>
                                <td>
                                    <img alt="" src={item.image}/>
                                </td>
                                <td>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>${item.price}</p>
                                    </div>
                                </td>
                                <td>
                                    <button onClick={(event)=>{minusItem(event,index)}}>-</button>
                                    <input type="text" value ={item.number}/>
                                    <button onClick={(event)=>{addItem(event,index)}}>+</button>
                                </td>
                                <td>
                                    <i className="fas fa-trash" onClick={()=>deleteItem(index, item.id)}></i>
                                </td>
                            </tr>

                        })}
                    </table>
                </div>

                {items !== null && 
                        <div className="totalPrice">
                            <h3>Total: $<span>{price}</span></h3>
                            <button onClick={clearProduct}>Clear Cart</button>
                        </div>
                }
            </div>
        </div>
    );
}

export default Modal;