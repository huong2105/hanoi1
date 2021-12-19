import React, { useEffect, useLayoutEffect, useState } from "react";
import ManaComponent from "./banner";
import Feedback from "./Feedback.js";
import { PageListproducts } from "./ListProduct";
import { useCookies } from "react-cookie";
import PageFeedbackClient from "./feedBackClient";
function PageMana() {
    const getCookies = useCookies();
  const [listManager, setListManager] = useState([
    {
      id: 0,
      title: "banner",
    },
    {
      id: 1,
      titile: "phản hồi",
    },
  ]);

  const [type, setType] = useState("banner");
  return (
<>
    {getCookies[0].status === "admin" ?   <div className="wrapepr-mng">
    <div className="wrapper-left-mng">
      <div className="item-left-mng">
        <div onClick={() => setType("banner")}>
          <p>Quản lý banner</p>
        </div>
        <div onClick={() => setType("listproducts")}>
          <p>Quản lý listproducts</p>
        </div>
        <div onClick={() => setType("feedback")}>
          <p>Phản hồi </p>
        </div>
        <div>
          <p>Đăng xuất </p>
        </div>
      </div>
    </div>
    <div className="wrapper-right-mng">
      {type === "banner" ? (
        <ManaComponent />
      ) : (
        <>{type === "listproducts" ? <PageListproducts /> : type === "feedback" ? <Feedback /> : null}</>
      )}
    </div>
  </div> : 
  
    <div className="wrapepr-mng">
      <div className="wrapper-left-mng">
        <div className="item-left-mng">
          <div onClick={() => setType("feedback")}>
            <p>Phản hồi </p>
          </div>
          <div>
            <p>Đăng xuất</p>
          </div>
        </div>
      </div>
      <div className="wrapper-right-mng">
        <PageFeedbackClient />
      </div>
    </div>
  }
  </>
  );
}

export default PageMana;
