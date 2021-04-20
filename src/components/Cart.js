import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import CartItem from './CartItem'
const Cart = () => {
    const { cart } = useSelector(state => state.products)
    if (cart.length === 0) return <p className="display-4 text-center">You cart is empty</p>

    const totalProducts = cart.map(i => i.count).reduce((a, b) => a + b, 0)
    const totalPrice = cart.map(i => i.totalPrice).reduce((a, b) => a + b, 0)

    return (
        <div className="container my-3">
            <div className="row">
                {cart.map(item => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        count={item.count}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        totalPrice={item.totalPrice}
                        quantity={item.quantity}
                    />
                ))}
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="card">
                        <div className="card-header">Sub total</div>
                        <div className="card-body">
                            <p>
                                Total Products: {totalProducts}
                            </p>
                            <p>
                                Total Price: {totalPrice}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
