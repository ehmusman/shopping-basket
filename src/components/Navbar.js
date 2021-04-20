import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="bg-danger">
            <div className="container">
                <div className="d-flex justify-content-around flex-wrap py-2 navbar">
                    <Link className="nav-item" to="/"> Shopping Basket </Link>
                    <Link className="nav-item" to="/"> Products </Link>
                    <Link className="nav-item" to="/cart"> Cart </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
