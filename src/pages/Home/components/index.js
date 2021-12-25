import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { laybanner } from "../../../redux/bannermng/action";
import { Carousel } from "react-bootstrap";
import {
  filterListProduct,
  getListProduct,
  wpGetListProduct,
} from "../../../redux/ListProduct/action";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactHtmlParser from "react-html-parser";
import { BsArrowBarRight, BsArrowRight } from "react-icons/bs";
import { getHomestay } from "../../../redux/Homestay/action";

function Home() {
  const [id, setId] = useState("615db69b5c661f01f4db4000");
  const { dataListProduct, datafilterListProduct, wpdata } = useSelector(
    (state) => state.ListReducer
  );
  const { data } = useSelector((state) => state.dulieubanner);
  const { dataHomestay } = useSelector((state) => state.homestayReducer);

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoPlay: true,
    autoplaySpeed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(laybanner());
  }, [dispatch]);
  useEffect(() => {
    dispatch(
      getListProduct({
        page: 1,
        perPage: 100,
      })
    );
    dispatch(filterListProduct(id));
    dispatch(wpGetListProduct());
    dispatch(getHomestay());
  }, [dispatch]);

  const filterListProductSubmit = (id) => {
    setId(id);
    dispatch(filterListProduct(id));
  };
  return (
    <div className="App">
      <div className="wrapper-banner">
        <Carousel data data-interval="1000" autoPlay={true} interval={5000}>
          {data && data.length > 0 ? (
            data.map((item, index) =>
              item.anh && item.anh !== null && item.anh !== undefined ? (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 imgbanner"
                    src={`/images/${item.anh}`}
                    alt=""
                  />
                </Carousel.Item>
              ) : (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 imgbanner"
                    src={`/images/5.png`}
                    alt=""
                  />
                </Carousel.Item>
              )
            )
          ) : (
            <Carousel.Item>
              <img
                className="d-block w-100 imgbanner"
                src={`/images/5.png`}
                alt=""
              />
            </Carousel.Item>
          )}
        </Carousel>
      </div>

      <div className="wrapper-content">
        <div className="content-product">
          <div className="content-product-top">
            {/* <div className='titleHomestay'>
                    <div></div>
                    <span>Top Homestay</span>
                    <div></div>
                  </div>      */}
            <div className="content-product-top-left">
              {wpdata && wpdata.length > 0 ? (
                <Link to={`/tin-tuc/${wpdata[0].slug}`}>
                  <div
                    className="content-product-top-left-1"
                    style={{
                      backgroundImage: `url('${
                        wpdata && wpdata.length > 0
                          ? wpdata[0].acf.img1.url
                          : null
                      }')`,
                    }}
                  >
                    {wpdata[0].slug}
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/%C4%90an+Ph%C6%B0%E1%BB%A3ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.1141863,105.6454864,12.75z/data=!4m5!3m4!1s0x3134f8a97d45abe5:0xfa0e3ace5d0110a6!8m2!3d21.084855!4d105.6690963?hl=vi-VN"
                    >
                      Xem đường đi
                    </a>
                  </div>
                </Link>
              ) : null}

              <div
                className="content-product-top-left-1"
                style={{
                  backgroundImage: `url('/images/${datafilterListProduct.anhsanpham1}')`,
                }}
              >
                content-product-top-right-2
              </div>
              <div
                className="content-product-top-left-2"
                style={{
                  backgroundImage: `url('/images/${datafilterListProduct.anhsanpham2}')`,
                }}
              >
                content-product-top-left-2
              </div>
            </div>
            <div className="content-product-top-right">
              <div
                className="content-product-top-right-1"
                style={{
                  backgroundImage: `url('/images/${datafilterListProduct.anhsanpham3}')`,
                }}
              >
                content-product-top-right-1
              </div>
              <div
                className="content-product-top-right-2"
                style={{
                  backgroundImage: `url('/images/${datafilterListProduct.anhsanpham4}')`,
                }}
              >
                content-product-top-right-2
              </div>
            </div>
          </div>
          <div className="content-product-bottom">
            {dataHomestay && dataHomestay.length > 0 ? (
              dataHomestay.map((item, index) => (
                <div className="item-content-product-bottom" key={index}>
                  <img src={`images/${item.anh}`} alt="" />
                </div>
              ))
            ) : (
              <>
                {" "}
                <div className="item-content-product-bottom">
                  <img src="images/1.png" alt="" />
                </div>
                <div className="item-content-product-bottom">
                  <img src="images/2.png" alt="" />
                </div>
                <div className="item-content-product-bottom">
                  <img src="images/3.png" alt="" />
                </div>
                <div className="item-content-product-bottom">
                  <img src="images/4.png" alt="" />
                </div>
              </>
            )}

            <div className="view">
              <BsArrowBarRight fontSize={50} color={"#D1E8E4"} />
            </div>
          </div>
        </div>
        <div className="new-product-ranges">
          <div className="item-new-product-ranges">
            <div className="item-new-product-top">
              <div className="item-new-product-top-left">
                {" "}
                Bài viết mới nhất{" "}
              </div>
              <div className="item-new-product-top-right">
                {" "}
                Bạn muốn tìm kiếm địa điểm mới nhất ? Tại Coffee And Camp, chúng
                mình liên tục bổ sung các địa điểm du lịch mới trong phạm vi Hà
                Nội.
              </div>
            </div>
            <div className="item-new-product-bottom">
              <Slider {...settings} className="sildernews">
                {dataListProduct && dataListProduct.length > 0
                  ? dataListProduct.map((item, index) => (
                      <div>
                        <Link to={`/chi-tiet/${item.slug}`}>
                          <div
                            className="item-new-product-bottom-1"
                            key={index}
                          >
                            {item.acf &&
                            item.acf !== undefined &&
                            item.acf !== null &&
                            item.acf.img1 ? (
                              <img src={`${item.acf.img1.url}`} />
                            ) : (
                              1
                            )}
                            <div className="content-new-products-1"></div>
                            <div className="title-address-news">
                              {ReactHtmlParser(item.title.rendered)}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                  : null}
              </Slider>
            </div>
            <a href="/danh-sach-dia-diem">
              {" "}
              <div className="xtchomepage">
                {" "}
                Xem tất cả <BsArrowRight />{" "}
              </div>
            </a>
            {/* <div>
              <div className="item-new-product-bottom">
                <Slider {...settings} className='sildernews'>
                  {dataListProduct && dataListProduct.length > 0 ? dataListProduct.map((item, index) => (
                    <div>
                      <Link to={`/chi-tiet/${item.slug}`}>
                        <div className="item-new-product-bottom-1" key={index}>
                          {item.acf && item.acf !== undefined && item.acf !== null && item.acf.img1 ? <img src={`${item.acf.img1.url}`} /> : 1}
                          <div className='content-new-products-1'></div>
                          <div className='title-address-news'>{ReactHtmlParser(item.title.rendered)}</div>
                        </div></Link>
                    </div>
                  )) : (null)}
                </Slider>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
