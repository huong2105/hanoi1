
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { laybanner } from '../../../redux/bannermng/action';
import { Carousel } from "react-bootstrap"
import { filterListProduct, getListProduct, wpGetListProduct } from '../../../redux/ListProduct/action';
import { Link } from 'react-router-dom';

function Home() {
  const [id, setId] = useState("615db69b5c661f01f4db4000")
  const { data } = useSelector(state => state.dulieubanner)

  const { dataListProduct, datafilterListProduct, wpdata } = useSelector(state => state.ListReducer)
  console.log("wpdata", wpdata);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(laybanner())
    dispatch(getListProduct())
    dispatch(filterListProduct(id))
    dispatch(wpGetListProduct())
  }, [])

  const filterListProductSubmit = (id) => {

    setId(id);
    dispatch(filterListProduct(id))
  }
  return (
    <div className="App">

      <div className="wrapper-banner">

        <Carousel>
          {data.map((item, index) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`/images/${item.anh}`}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}

        </Carousel></div>

      <div className="wrapper-content">
        <div className="content-function">
          <div className="item-content-function">
            <div className="text-content-function">Free <br></br> Shipping</div>
            <div className="text-content-function">Finance <br></br> Available</div>
            <div className="text-content-function">Warranty <br></br> Guarrantee</div>
            <div className="text-content-function">Large Stoke <br></br> Holdings</div>
            <div className="text-content-function">Product<br></br> Sourcing</div>
            <div className="text-content-function">Installation</div>
          </div >
        </div >
        <div className="content-product">
          <div className="content-product-top">
            <div className="content-product-top-left">
              {wpdata && wpdata.length > 0 ? (<Link to={`/tin-tuc/${wpdata[0].slug}`}>
                <div className="content-product-top-left-1" style={{ backgroundImage: `url('${wpdata && wpdata.length > 0 ? wpdata[0].acf.img1.url : (null)}')` }}>
                  {wpdata[0].slug}
                  <a target="_blank" href="https://www.google.com/maps/place/%C4%90an+Ph%C6%B0%E1%BB%A3ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.1141863,105.6454864,12.75z/data=!4m5!3m4!1s0x3134f8a97d45abe5:0xfa0e3ace5d0110a6!8m2!3d21.084855!4d105.6690963?hl=vi-VN">Xem đường đi</a>
                </div>
              </Link>) : (null)}


              <div className="content-product-top-left-2" style={{ backgroundImage: `url('/images/${datafilterListProduct.anhsanpham2}')` }}>content-product-top-left-2</div>
            </div>
            <div className="content-product-top-right">
              <div className="content-product-top-right-1" style={{ backgroundImage: `url('/images/${datafilterListProduct.anhsanpham3}')` }}>content-product-top-right-1</div>
              <div className="content-product-top-right-2" style={{ backgroundImage: `url('/images/${datafilterListProduct.anhsanpham4}')` }}>content-product-top-right-2</div>
            </div>
          </div>
          <div className="content-product-bottom">
            {dataListProduct.map((item, index) => (
              <div className="item-content-product-bottom"
                key={index}
                onClick={() => filterListProductSubmit(item._id)}>{item.tieude} </div>
            ))}

            <div className="item-content-product-bottom">pool side</div>
            <div className="item-content-product-bottom">custom</div>
            <div className="item-content-product-bottom">packages</div>
            <div className="view">view</div>
          </div>
        </div>
        <div className="new-product-ranges">

          <div className="item-new-product-ranges">
            <div className="item-new-product-top">
              <div className="item-new-product-top-left">  New Product Ranges</div>
              <div className="item-new-product-top-right"> QUá dài :)</div>
            </div>
            <div className="item-new-product-bottom">
              <div className="item-new-product-bottom-1">bottom-1</div>
              <div className="item-new-product-bottom-1">bottom-2</div>
              <div className="item-new-product-bottom-1">bottom-3</div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}

export default Home;
