import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Infologin = () => {
  return (
    <div className="Infologin">
      <div>
        <input type="text" placeholder="Tên đăng nhập" />
      </div>
      <div>
        <input type="password" placeholder="Mật khẩu" />
      </div>
      <Link to = '/'>
        <div>
          <button type="submit"> Đăng Nhập </button>
        </div>
      </Link>
    </div>
  );
};

export default Infologin;
