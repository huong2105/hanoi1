import { Button } from "bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Infosignup = () => {
  const [name, setName] = useState();
  const error = () => {};
  const onSubmit = () => {
    // if (name.length !== "") {
    //       alert("Nhập họ và tên");
    //     }
    // console.log("huy");
  };
  return (
    <>
      <div className="infosignup">
        <div>
          <input type="text" placeholder="Họ và tên *" />
        </div>
        <div>
          <input type="text" placeholder="Email *" />
        </div>
        <div>
          <input type="password" placeholder="Mật khẩu *" />
        </div>
        <div>
          <input type="password" placeholder="Xác nhận mật khẩu *" />
        </div>

        <div>
          <Link to = "/dang-nhap">
            <button type="Submit" onClick={() => onSubmit()}>
              Đăng ký
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Infosignup;
