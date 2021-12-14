import React from 'react';
import "./style.css"

export const BannerBlog = ({title}) => {

    return(
        <div className = 'BannerBlog'>
            {title === "Cà phê" ?  <img src = "/images/CAFE.png"/> :  <img src = "/images/HOMESTAY.png"/>}
           
        </div>
    )
}