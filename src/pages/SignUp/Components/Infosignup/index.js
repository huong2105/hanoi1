import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../../../utils";
import "./style.css";

const Infosignup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passwork, setPasswork] = useState("");
  const [confirmPasswork, setConfirmPasswork] = useState("");
  const [err, setError] = useState("");
  const history = useHistory("");
  const onSubmit = async () => {
    if (
      userName === "" ||
      email === "" ||
      passwork === "" ||
      (confirmPasswork === "" && err !== "")
    ) {
      if(passwork !== confirmPasswork){
        setError("Mật khẩu không trùng khớp!");
      }
      setError("Vui lòng nhập đầy đủ thông tin!");
    } else {
      const data = { userName, email, passwork, confirmPasswork };
      const res = await axios.post(`${API_URL}/account`, data);
      
      if (res.status === 250) {
        setError("Tài khoản đã tồn tại!!");
      } else if (res.status === 200) {
        history.push("/dang-nhap");
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
