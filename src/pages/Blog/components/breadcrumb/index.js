import React from 'react';
import "./style.css"
function Breadcrumb({ title }) {


    return (
        <div className='breadcrumb breadcrumbblog'>
            <a href='/'> <div >Trang Chủ</div></a>
            <div>|</div>
            <div>{title}</div>
        </div>
    );
}

export default Breadcrumb;