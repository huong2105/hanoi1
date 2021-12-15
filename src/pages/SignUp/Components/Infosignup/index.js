import axios from "axios";
import { Button } from "bootstrap";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

const Infosignup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passwork, setPasswork] = useState("");
  const [confirmPasswork, setConfirmPasswork] = useState("");
  const [err, setError] = useState("");
  const history = useHistory("");
  const onSubmit = async () => {
    console.log("userName", userName);
    if (
      userName === "" ||
      email === "" ||
      passwork === "" ||
      (confirmPasswork === "" && err !== "")
    ) {
      setError("Vui lòng nhập đầy đủ thông tin!");
    } else {
      const data = { userName, email, passwork, confirmPasswork };
      const res = await axios.post("http://localhost:5000/account", data);
      console.log(res);
      if (res.status === 250) {
        setError("Tài khoản đã tồn tại!!");
      } else if (res.status === 200) {
        // history.push("/dang-nhap");
      }
    }
  };
  return (
    <>
      <div className="infosignup">
        {/* <form method="POST"> */}
        <div>
          <input
            type="text"
            placeholder="Họ và tên *"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email *"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Mật khẩu *"
            onChange={(e) => setPasswork(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Xác nhận mật khẩu *"
            onChange={(e) => setConfirmPasswork(e.target.value)}
          />
          <br></br>
          <div className="erraccount"> {err}</div>
        </div>
        <div>
          {/* <Link to="/dang-nhap"> */}
          <button type="Submit" onClick={() => onSubmit()}>
            Đăng ký
          </button>
          {/* </Link> */}
        </div>
        {/* </form> */}
      </div>
    </>
  );
};

export default Infosignup;
