import React,{useState} from 'react';
import fakeData from '../../../fakeData';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './shop.css'


const Shop = () => {   
    const first10 = fakeData.slice(0,10);
    const [products,setProduct] = useState(first10);
    const [cart, setCart] = useState([])

    const productHandel = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart)

    }
    return (
        <div className="shop_container">
            <div className="product_container">
            {
                products.map(productItem =><Product
                     product={productItem} 
                     productHandel ={productHandel} 
                     
                     ></Product>)
            }
            </div>
            <div className="cart_container">
               <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;