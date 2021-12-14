import React from 'react';
import "./style.css"
function Breadcrumb() {

    
    return (
     <div className = 'breadcrumb breadcrumbProductsListing' style={{padding: "0 100px"}}>
         <div>Trang chủ</div>
         <div>|</div>
         <div>Cà phê</div>
         <div>|</div>
         <div>Tất cả</div>
     </div>
    );
}

export default Breadcrumb;