import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {
    const [products, setproduct] = useState([]);
    const [cart, setcart] = useState([]);
    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setproduct(data))
    }, [])
    
    const handlerClick = (product) => {
        const newCart = [...cart, product]
        setcart(newCart);
    }
    return (
        <div className='shop-container'>
            <div>
                <h1 className='header-title'>Today Activity</h1>
                <div className="product-container">
                    {
                products.map(product => <Product
                    product={product}
                    handlerClick={handlerClick}
                    key={product.id}
                ></Product>)
            }
                </div>
            </div>
            <div className="card-conatainer">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;