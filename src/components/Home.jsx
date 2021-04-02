import React from 'react';
import Header from './Header';
import { useSelector } from "react-redux"
import currencyFormatter from "currency-formatter"
import { Link } from "react-router-dom"
const Home = () => {
    const { products } = useSelector(state => state.ProductReducer)
    console.log("ss", products)
    return (
        <div >
            <Header />
            <div className="container" className="home">
                <div className="row">
                    {
                        products.map((productData) => (
                            <div className="col-lg-3 col-md-4 col-sm-12" key={productData.id}>
                                <div className="product__data">
                                    <div className="product__img">
                                        <Link to={`/details/${productData.id}`}>
                                            <img src={productData.image} alt="" />
                                        </Link>

                                    </div>
                                    <div className="product__name">
                                        {productData.name}
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="product__price">
                                               <span className="cutt">{currencyFormatter.format(productData.price, { code: 'USD' })}</span> 
                                                <span className="dis"> {productData.discount} %</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="product__dis__price">
                                                {currencyFormatter.format(productData.discountPrice, { code: 'USD' })}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;