import React from 'react'
import { useSelector } from "react-redux"
import Product from './Product'
const Products = () => {
    const { list } = useSelector(state => state.products)
    return (
        <div className="card-columns my-3">
            <div className="container">
                {list.map(product => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        quantity={product.quantity}
                        image={product.image}
                        description={product.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products
