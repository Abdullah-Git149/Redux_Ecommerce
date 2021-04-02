import React from 'react';
import logo from "../images/logo.webp"
import { Link } from "react-router-dom"
import {BsFillBagFill } from "react-icons/bs"
import {useSelector} from "react-redux"
const Navbar = () => {
    const {totalQuantity} = useSelector(state => state.CartReducer)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="#"><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link active" aria-current="page" >
                                    <div className="basket">
                                        <BsFillBagFill className="cart__icon" />
                                        <span>{totalQuantity}</span>
                                    </div>

                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;