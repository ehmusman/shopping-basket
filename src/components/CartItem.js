import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { changeCartCount, removeItemFromCart } from "../store/products"
const CartItem = ({ id, count, image, name, quantity, price, totalPrice }) => {

    const dispatch = useDispatch()
    const [value, setValue] = useState(count)

    useEffect(() => {
        dispatch(changeCartCount({
            id,
            value
        }))
    }, [value, dispatch, id])
    const handleIncrement = () => {
        setValue(Math.min(Number(quantity), Number(value) + 1))
    }
    const handleDecrement = () => {
        setValue(Math.max(1, Number(value) - 1))
    }
    const handleRemoveItem = () => {
        dispatch(removeItemFromCart(id))
    }

    return (
        <div className="col-12">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-8">
                            <img src={image} width="80%" height="80%" alt="" />
                        </div>
                        <div className="col-4 d-flex align-items-center justigy-sontent-center">
                            <p>
                                {name}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row d-flex align-items-center justigy-sontent-center">
                        <div className="col-8 py-5">
                            <button onClick={handleDecrement} className="btn mx-1 btn-danger">-</button>
                            <span className="mx-3">{count}</span>
                            <button onClick={handleIncrement} className="btn mx-1 btn-success">+</button>
                        </div>
                        <div className="col-3">

                            <p>
                                Quantity: {count}
                            </p>
                            <p>
                                Total: {count} X {price} = {totalPrice}
                            </p>
                        </div>
                        <div className="col-1">
                            <button onClick={handleRemoveItem} className="btn btn-danger">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItem
