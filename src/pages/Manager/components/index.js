
import React, { useEffect, useLayoutEffect, useState } from 'react';
import ManaComponent from './banner';
import { PageListproducts } from './ListProduct';

function PageMana() {

    const [type, setType] = useState("banner")
    return (
        <div className="wrapepr-mng">
            <div className="wrapper-left-mng">
                <div onClick={() => setType("banner")}><h1>Quản lý banner</h1></div>
                <div onClick={() => setType("listproducts")}><h1>Quản lý listproducts</h1></div>
            </div>
            <div className="wrapper-right-mng">
                {type === "banner" ? ( <ManaComponent />) : (<>
                    {type === "listproducts" ? (<PageListproducts/>) : (null)}
                </>)}
               
            </div>
        </div>
    );
}

export default PageMana;
