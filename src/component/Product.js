import React from 'react';

export const Product = ({ item, updateCart, type, index }) => {
    return (
        <div className="product-view">
            <img src={item.img} className='product-img'/>
            <button onClick={updateCart.bind(null, index)} className="add_to_cart">{type}</button>
            <h3 className="product-title">{item.title}</h3>
        </div>
    )
}

export default Product;



