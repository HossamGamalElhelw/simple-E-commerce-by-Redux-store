import React, { useEffect,useState } from 'react'
import './Home.css';

function Home() {
    const [productsApi, setProductsApi] = useState([]);
    const NUM_PRODUCT_PER_PAGE = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [startIndex,setStartIndex] = useState(0); 
    const [endIndex,setEndIndex] = useState(12);
    const [cart , setcart] = useState([]);
    const currentPage = Math.floor(startIndex / NUM_PRODUCT_PER_PAGE) + 1;
    const totalPages = Math.ceil(productsApi.length / NUM_PRODUCT_PER_PAGE);

    useEffect(()=>{
        const products = async() =>{
            try {
                const data = await fetch('https://dummyjson.com/products');
                const results = await data.json();
                setProductsApi(results.products);
                setTotalPages(Math.ceil(results.products.length / NUM_PRODUCT_PER_PAGE));
                setCurrentPage(1);
            } catch (error) {
                console.log(error);
            }
        }
        products();
    },[])
    
    useEffect(()=>{
        const savedCart = JSON.parse(localStorage.getItem('cartProducts')) || [];
        setcart(savedCart)
    },[]);

    const  ClickPreviousBtn = (e) =>{
        e.preventDefault();
        if(startIndex > 0){
            setStartIndex(startIndex - NUM_PRODUCT_PER_PAGE);
            setEndIndex(endIndex - NUM_PRODUCT_PER_PAGE);
            setCurrentPage(currentPage - 1);
        }
    }
    const  ClickNextBtn = (e) =>{
        e.preventDefault();
        if( productsApi.length > endIndex){
            setStartIndex(startIndex + NUM_PRODUCT_PER_PAGE);
            setEndIndex(endIndex + NUM_PRODUCT_PER_PAGE);
            setCurrentPage(currentPage + 1);
        }
    }
    const HandleAddToCard = (product) =>{
        const existingProductIndex = cart.findIndex(item => item.product.id === product.id);
        let updatedCart ;
        if(existingProductIndex !== -1){
            updatedCart = cart.map((item , index) => 
                index === existingProductIndex 
            ? {...item, quantity: item.quantity + 1}  
            : item
        )
        }else{
            updatedCart = [...cart ,{product, quantity : 1}]
        }
        setcart(updatedCart);
        localStorage.setItem('cartProducts',JSON.stringify(updatedCart));
    }

    return (
    <div className='home_container'>
        <h2 className='products_title'>Products</h2>
        <div className='products_content'>
            
        {productsApi.slice(startIndex,endIndex).map(product => (
                <div key={product.id} className='product_item'>
                <picture className='product_picture'>
                    <img className='product_img' src= {product.images[0]} alt="" />
                </picture>
                <h5 className='product_price'>{product.price}$</h5>
                <h5 className='product_name'>{product.title}</h5>
                <button onClick={()=> HandleAddToCard(product)} className='btn_add_toCard'>Add to Cart</button>
            </div>
        ))}
        </div>
        <div className="btn_control">
            <button onClick={ClickPreviousBtn} className='btn_previous'>Previous</button>
            <p className='numberPage'>{currentPage} : {totalPages}</p>
            <button onClick={ClickNextBtn} className='btn_next'>Next</button>
        </div>
    </div>
  )
}

export default Home