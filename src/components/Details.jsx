import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import currencyFormatter from "currency-formatter"
import { BsDash, BsPlus } from "react-icons/bs"
const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { product } = useSelector(state => state.ProductReducer)
    console.log("pp", product)
    const [quantity,setQuantity] = useState(1)
    const decQuantity =()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }
    useEffect(() => {
        dispatch({ type: 'PRODUCT', id })
    }, [id])
    return (
        <div className="details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 a" >
                        <div className="detail__img">
                            <img src={product.image} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 b" >
                        <div className="detail__name">
                            {product.name}
                        </div>
                        <div className="detail__prices">
                            <span className="detail__price">{currencyFormatter.format(product.price, { code: 'USD' })}</span>
                            <span className="detail__dis__price">{currencyFormatter.format(product.discountPrice, { code: 'USD' })}</span>
                        </div>
                        <div className="detail__info">
                            <div className="detail__quantity">
                                <span className="dec" onClick={decQuantity}> <BsDash /></span>
                                <span className="qty">{quantity}</span>
                                <span className="inc" onClick={()=>setQuantity(quantity+1)}><BsPlus /></span>
                                <button className="btn__default" onClick={()=>dispatch({type: 'ADD_TO_CART',
                                payload:{product,quantity}})}>Add to Cart</button>
                            </div>
                        </div>
                        <div className="detail__des">
                            {product.desc}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;