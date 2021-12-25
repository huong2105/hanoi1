import React from 'react';
import "./style.css"
function Breadcrumb({ad}) {

    
    return (
     <div className = 'breadcrumb breadcrumbProductsListing' style={{padding: "0 100px"}}>
         <div>Trang chủ</div>
         <div>|</div>
         <div>{ad === "homestay" ? "Homestay" : "Cà phê"}</div>
         <div>|</div>
         <div>Tất cả</div>
     </div>
    );
}

export default Breadcrumb;