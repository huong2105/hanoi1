import React from 'react';
import Breadcrumb from "./Components/breadcrumb"
import Left from './Components/product/Component/Left';
import "./style.css"
import {useParams } from "react-router-dom";
function PageProducListing() {

    const {ad} = useParams()
    return (
        <>
            <div class="BannerBlog">
               {ad === "homestay" ? (<img src="/images/HOMESTAY.png" />) :(<img src="/images/CAFE.png" />)}  
            </div>
            <div className="productlisting">
                <Breadcrumb  ad = {ad}/>
                <div className="Wapper-product">
                    <Left ad = {ad}/>
                </div>
            </div>
        </>

    );
}

export default PageProducListing;