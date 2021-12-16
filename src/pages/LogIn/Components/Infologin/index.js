import axios from "axios";
import React, { useState } from "react";
import "./style.css";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const Infologin = () => {
  const [email, setEmail] = useState();
  const [passwork, setPasswork] = useState();
  const [token, setToken] = useCookies();
  const [err, setErr] = useState("");
  const history = useHistory()
  const onSubmitLogin = async () => {
    try {
      const data = { email, passwork };
      const res = await axios.post(`http://localhost:5000/login`, data);
      console.log(res);
      if (res.data.token) {
        const tokenData = res.data.token;
        const email = res.data.email;
        const userName = res.data.userName;
        setToken("token", tokenData);
        setToken("email", email);
        setToken("userName", userName);
        history.push('/')
      }
    } catch (error) {
      setErr("Tài khoản hoặc mật khẩu không đúng...");
    }
  };
  return (
    <div className="Infologin">
      <div className="iteminfologin">
        <div>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Mật khẩu"
            onChange={(e) => setPasswork(e.target.value)}
          />
        </div>
        {err === "" ? null : <div className="err-login">{err}</div>}

        <div className="buttonlogin">
          <button type="submit" onClick={() => onSubmitLogin()}>
            Đăng Nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Infologin;
