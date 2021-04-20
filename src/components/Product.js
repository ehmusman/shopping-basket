import React from 'react'
import { Link } from "react-router-dom"
const Product = ({ id, name, price, quantity, image, description }) => {
    return (
        <div className="card">
            <img className="card-img-top img-fluid" src={image} alt="" />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p>$ {price}</p>
                <p className="card-text text-truncate">
                    {description}
                </p>
                <Link to={`/product/${id}`} className="btn btn-danger">Details</Link>
            </div>
        </div>
    )
}

export default Product
