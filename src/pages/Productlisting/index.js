import React from 'react';
import Breadcrumb from "./Components/breadcrumb"
import Left from './Components/product/Component/Left';
import "./style.css"
function PageProducListing() {


    return (
        <>
            <div class="BannerBlog">
                <img src="/images/CAFE.png" />
            </div>
            <div className="productlisting">
                <Breadcrumb />
                <div className="Wapper-product">
                    <Left />
                </div>
            </div>
        </>

    );
}

export default PageProducListing;