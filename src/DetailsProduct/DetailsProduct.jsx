import React, { useContext, useEffect } from 'react';
import { Button, Carousel, Rate } from 'antd';
import { useParams } from 'react-router-dom';
// import Loading from '../Loading/Loading';
import { contextProduct } from '../context/ProductContext';
import Loading from '../Loading/Loading';

const DetailsProduct = () => {
    const { getOneProduct, oneProduct } = useContext(contextProduct)
    const params = useParams()
    console.log(params)
    useEffect(() => {
        getOneProduct(params.id)
    }, [])
    console.log(oneProduct)
    return oneProduct ? (
        <div className='container'>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ width: "35vw" }}>
                    <Carousel autoplay>
                        <div>
                            <img width="100%" src={oneProduct.image1} alt="" />
                        </div>
                        <div>
                            <img width="100%" src={oneProduct.image2} alt="" />
                        </div>
                    </Carousel>
                </div>
                <div style={{ width: "40vw" }}>
                    <h2>{oneProduct.brand}</h2>
                    <h3>{oneProduct.title}</h3>
                    <h2>{"$ " + oneProduct.price}</h2>
                    <Button className='cart-input-button' size='large' style={{ width: "100%", margin: "15px 0px" }}>
                        Add to cart
                    </Button>
                    <div>{oneProduct.description}</div>
                    <h5 className="reviews">REVIEWS</h5>
          <Rate allowHalf defaultValue={2.5} />
                </div>
            </div>
        </div>
    ) : <Loading/>
};

export default DetailsProduct;