import React from 'react';
import "./style.css"
function BreadcrumbComponent({title}) {

    
    return (
     <div className = 'breadcrumb'  style={{padding: "0 135px"}}>
         <div>Trang chủ</div>
         <div>|</div>
         <div>{title}</div>
     </div>
    );
}

export default BreadcrumbComponent;