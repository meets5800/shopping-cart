import React, { useEffect, useState } from 'react'
import data from "./data"
import "./products.css"

export const Products = () => {
    const [productItems, setProductItems] = useState([])

    const handleClick = () => {
        const newProducts = productItems.filter((item) => {
            return (
                item.price > 30000
            )
        })
        setProductItems(newProducts)
    };
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(data=>setProductItems(data))
    },[])
    return (
        <div>
            <button className='filter' onClick={handleClick}><abbr title='It will filter items having more than 30000 price'>Filter by price</abbr></button>
            <div className='cart'>
                {
                    productItems.map((product) => {
                        return (
                            <div className='product' key={product.id}>
                                <div className='product-image'>
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className='product-details'>
                                    <p className='product-title'>{product.title}</p>
                                    <p className='product-price'>₹ {product.price}</p>
                                    <p className='product-price'>{product.rate} Star</p>
                                </div>
                                <button className='add'>Add</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
