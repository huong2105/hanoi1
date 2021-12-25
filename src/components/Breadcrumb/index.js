import React from 'react';
import "./style.css"
function BreadcrumbComponent({title}) {

    
    return (
     <div className = 'breadcrumb'  style={{padding: "20px 135px 0 135px"}}>
         <a href='/'><div>Trang chủ</div></a>
         <div>|</div>
         <div>{title}</div>
     </div>
    );
}

export default BreadcrumbComponent;