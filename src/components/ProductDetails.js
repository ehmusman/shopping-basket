import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProductDetail, addToCart } from "../store/products"
import { useHistory } from "react-router-dom"
import Loading from './Loading'
const ProductDetails = ({ match }) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const [value, setValue] = useState(0)

    useEffect(() => {
        dispatch(getProductDetail(match.params.id))
    }, [match, dispatch])
    const { product, cart } = useSelector(state => state.products)
    if (!product) return <Loading />
    const { description, id, image, name, price, quantity } = product

    const handleIncrement = () => {

        setValue(Math.min(Number(quantity), Number(value) + 1))
    }
    const handleDecrement = () => {
        setValue(Math.max(0, Number(value) - 1))
    }
    const handleAddToCart = () => {
        const product = cart.find(i => i.id === id)
        if (product) {
            alert("Product is already added to cart")
            return
        }
        const data = {
            id,
            image,
            name,
            price,
            quantity,
            totalPrice: value * price,
            count: value
        }
        dispatch(addToCart(data))
        setValue(0)
        history.push("/cart")
    }

    return (
        <div className="container my-3">
            <Link to="/" className="btn btn-danger">Back</Link>
            <div className="row my-5">
                <div className="col-12 col-md-6">
                    <img src={image} width="80%" height="80%" alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <h4 className="my-1">Product ID # {id}</h4>
                    <hr />
                    <p><span className="my-1 font-weight-bold">Name: </span>{name}</p>
                    <hr />
                    <p><span className="my-1 font-weight-bold">Price: $</span>{price}</p>
                    <hr />
                    <div className="my-1">
                        <button onClick={handleDecrement} className="btn mx-1 btn-danger">-</button>
                        <span className="mx-3">{value}</span>
                        <button onClick={handleIncrement} className="btn mx-1 btn-success">+</button>
                        {value > 0 && <div onClick={handleAddToCart} className="ml-3 btn btn-primary">Add To Cart</div>}
                    </div>
                    <hr />
                    <p><span className="my-1 font-weight-bold">Description: </span>{description}</p>
                    <hr />

                </div>
            </div>
        </div>
    )
}

export default ProductDetails
