import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product.name)
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product_name">{name}</h4>
                <br></br>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>Only {stock} left in stock - Order soon </p>
                <button className="main_button" onClick={() =>props.productHandel(props.product)}
                
                ><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;