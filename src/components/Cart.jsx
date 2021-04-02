import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import currencyFormatter from "currency-formatter"
import { BsDash, BsPlus, BsReverseBackspaceReverse } from "react-icons/bs"

const Cart = () => {
    const { products, totalPrice, totalQuantity } = useSelector(state => state.CartReducer);
    console.log(products)
    const dispatch = useDispatch()
    return (
        <div className="cart">
            <div className="containerr">
                <h2>Your Cart</h2>
                {
                    <div className="roww">
                        <div className="coll-9">
                            <div className="cart__heading">
                                <div className=" coll-2">Image</div>
                                <div className="cart__name coll-2">Name</div>
                                <div className="cart__price coll-2">Price</div>
                                <div className="cart__Inc/Dec coll-2">Quantity</div>
                                <div className="cart__total coll-2">Total Price</div>
                                <div className="cart__remove coll-2">Remove</div>
                            </div>
                            <div className="cart__flex">
                                {products.map((productData) => (
                                    <div className="cart__data" key={productData.id}>
                                        <div className="cart__img coll-2">
                                            <img src={productData.image} alt="" />
                                        </div>
                                        <div className="cart__name coll-2">
                                            {productData.name}
                                        </div>
                                        <div className="cart__price coll-2">
                                            {currencyFormatter.format(productData.discountPrice, { code: 'USD' })}

                                        </div>
                                        <div className="coll-2 cart__IncDec">
                                            <span className="dec" onClick={() => dispatch({ type: 'DEC', payload: productData.id })}> <BsDash /></span>
                                            <span className="qty">{productData.quantity}</span>
                                            <span className="inc" onClick={() => dispatch({ type: 'INC', payload: productData.id })}><BsPlus /></span>
                                        </div>
                                        <div className="cart__total coll-2">
                                            {currencyFormatter.format(productData.discountPrice * productData.quantity, { code: 'USD' })}


                                        </div>
                                        <div className="remove coll-2" onClick={() => dispatch({ type: 'REMOVE', payload: productData.id })}>
                                            <BsReverseBackspaceReverse />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="coll-3">
                            <div className="summary">
                                <h2>Summary</h2>
                                <div className="summary__prices">
                                    <div className="total__1">
                                        Total Price
                                    </div>
                                    <div className="total__2">
                                        {totalPrice}
                                    </div>
                                </div>

                                <div className="summary__qty">
                                    <div className="total__qty1">
                                       Total Quantity
                                    </div>
                                    <div className="total__qty2">
                                        {totalQuantity}
                                    </div>
                                </div>
                                <div >
                                    <button className="btn__check">Check Out</button>
                                </div>

                            </div>


                        </div>
                    </div>
                }
            </div>

        </div>
    );
};

export default Cart;