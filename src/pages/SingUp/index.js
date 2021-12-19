import axios from "axios";
import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import "./style.css";

function PageSingup() {
  const getCookies = useCookies();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState(
    getCookies && getCookies[0].email ? getCookies[0].email : ""
  );
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [content, setContent] = useState("");

  const postFeedback = async () => {
    if (
      userName === "" ||
      email === "" ||
      phone === "" ||
      position === "" ||
      content === ""
    ) {
      alert("Vui lòng nhập đẩy đầy đủ thông tin !!!");
    } else {
      var data = { userName, email, phone, company, position, content };
      await axios.post(`http://localhost:5000/feedback`, data);
      setUserName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setPosition("");
      setContent("");
    }
  };
  return (
    <div className="wrapper-img">
      <div className="SingUp">
        <div className="left">
          <div className="item-left">
            <h2>Gửi phản hồi</h2>
            <div className="wrapper-input">
              <input
                type="text"
                value={userName}
                className="name"
                placeholder="Họ và tên *"
                onChange={(e) => setUserName(e.target.value)}
              />
              {getCookies && getCookies[0].email ? null : (
                <input
                  type="text"
                  value={email}
                  className="name"
                  placeholder="Email *"
                  onChange={(e) => setEmail(e.target.value)}
                />
              )}
              <input
                type="number"
                value={phone}
                className="name"
                placeholder="Số điện thoại *"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                value={company}
                className="name"
                placeholder="Công ty (websites) nếu có"
                onChange={(e) => setCompany(e.target.value)}
              />
              <input
                type="text"
                value={position}
                className="name"
                placeholder="Chức vụ/nghề nghiệp *"
                onChange={(e) => setPosition(e.target.value)}
              />
              <input
                type="text"
                value={content}
                className="name messenger"
                placeholder="Nội dung phản hồi... *"
                onChange={(e) => setContent(e.target.value)}
              />
              <button type="submit" onClick={() => postFeedback()}>
                Gửi
              </button>
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
