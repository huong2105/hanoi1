import React from "react";
import "./style.css";

function PageSingup() {
  return (
    <div className="wrapper-img">
      <div className="SingUp">
        <div className="left">
          <div className="item-left">
            <h2>Gửi phản hồi</h2>
            <p> Commercial enquiries only </p>
            <div className="wrapper-input">
              <input type="text" className="name" placeholder="Your Name *" />
              <input type="text" className="name" placeholder="Company *" />
              <input type="text" className="name" placeholder="Email *" />
              <input type="number" className="name" placeholder="Phone *" />
              <input type="text" className="name" placeholder="State *" />
              <input
                type="text"
                className="name messenger"
                placeholder="Messenger"
              />
              <button>Gửi</button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="/images/pexels-tirachard-kumtanom-347141.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default PageSingup;
