import React,{useEffect, useState} from 'react'
import './Cart.css'
function Cart() {
    const [cartProduct , setCartProduct] = useState([])
    const [sumPrices , setSumprices] = useState(0);

    useEffect(()=>{
        const cartItems = JSON.parse(window.localStorage.getItem('cartProducts')) || [];
        setCartProduct(cartItems);
    },[])
    useEffect(()=>{
        const total = cartProduct.reduce((acc,item) => acc + item.product.price * item.quantity , 0)
        setSumprices(total);
    },[cartProduct])
    
    const btnRemove = (product) =>{
        const updateCart = cartProduct.filter(item => item.product.id !== product.id);
        setCartProduct(updateCart);
        window.localStorage.setItem('cartProducts',JSON.stringify(updateCart))
    }
    const removeAllProduct = () => {
        setCartProduct([]);
        window.localStorage.setItem('cartProducts',JSON.stringify([]));
    }
    const increaseQuantity = (product) =>{
        const updatedCart = cartProduct.map((item) =>
            item.product.id === product.id ? {...item, quantity: item.quantity + 1} : item );
            setCartProduct(updatedCart)
            localStorage.setItem('cartProducts',JSON.stringify(updatedCart));
    }
    const decreaseQuantity = (product) => {
        const updateCart = cartProduct.map(item =>
            item.product.id === product.id && item.quantity > 1 
            ? {...item , quantity : item.quantity -1} : item)
        setCartProduct(updateCart);
        localStorage.setItem('cartProducts',JSON.stringify(updateCart));
    }
    return (
        <div className="cart">
            <div className='cart_container'>
                <h3 className='title_cart'>Your Cart</h3>
                    {cartProduct.length > 0 ? (cartProduct.map((item) => {
                        return(
                            <div className='product_cart_item' key={item.product.id}>
                                <div className="product_info">
                                    <picture className='product_picture'>
                                        <img className='product_img' src={item.product.images[0]} alt="" />
                                    </picture>
                                <div>
                                    <p className='product_title'>{item.product.title}</p>
                                    <p className='product_price'>${item.product.price}</p>
                                </div>
                            </div>
                            <div className="btn_controls">
                                <button onClick={() => decreaseQuantity(item.product)} className='btn_decrease'>-</button>
                                <p className='numProduct'>{item.quantity}</p>
                                <button onClick={() => increaseQuantity(item.product)} className='btn_increase'>+</button>
                                <button onClick={() => btnRemove(item.product)} className='remove_btn'>Remove</button>
                            </div>
                        </div>
                    )})) : (<h4>Cart is empty</h4>) }
            <div className="sum_and_remove_btn">
                    <h4 className='total_prices'>Total : ${sumPrices.toFixed(2) || 0} </h4>
                    <button onClick={removeAllProduct} className='remove_all_btn'>Remove all products</button>
            </div>
        </div>
        </div>
    )
}

export default Cart