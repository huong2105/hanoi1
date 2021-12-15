import "./style.css";
import { BiSearchAlt, BiPlusCircle } from "react-icons/bi";
import { BsPersonPlus, BsPersonCircle } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { cookies,useCookies } from "react-cookie";
function Header() {
  const [input, setInput] = useState(0);
  const [idHeader, setIdHeader] = useState(1);
  const [token, setToken, removeCookie] = useCookies()
  const [header, setHeader] = useState([
    {
      id: 1,
      title: "Trang chủ",
      link: "/",
    },
    {
      id: 2,
      title: "cà phê",
      link: "/blog/ca-phe",
    },
    {
      id: 3,
      title: "homestay",
      link: "/blog/homestay",
    },
  ]);
  const onsubmit = () => {
    setInput(1);
  };
  const getCookies = useCookies();
  const removieCookies = () => {

    removeCookie("token")
  }
  return (
    <div className="App1">
      <div className="header-top">
        <div className="content-left">
          <a href="tel:0000xxxxx">
            {" "}
            <AiOutlinePhone />
            0000xxxxx
          </a>
          <div>|</div>
          <a href="mailto: abc@gmail.com">
            <CgMail /> abc@gmail.com
          </a>
        </div>
        {getCookies[0].token  ? (
            <div className="content-right" onClick={() => removieCookies()}>
              <BsPersonCircle />
              <div className="account-user">{getCookies[0].userName}</div>
            </div>
        ) : (
          <a href="/dang-nhap">
            <div className="content-right">
              <BsPersonCircle /> Tài khoản
            </div>
          </a>
        )}
      </div>
      <div className="infoheader">
        <div></div>
        {header.map((item, index) => (
          <>
            <a href={`${item.link}`}>
              <span
                onClick={() => setIdHeader(item.id)}
                className={item.id === idHeader ? "a" : ""}
              >
                {item.title}
              </span>
            </a>
          </>
        ))}
        {/* <span>Trang chủ</span>
                <a href="/blog"> <span>Cà phê</span></a>
                <span>Homestay</span> */}
        <div className="iconheader">
          {input === 0 ? null : <input type="text" />}

          <BiSearchAlt title="Tìm kiếm" onClick={() => onsubmit()} />
          <a href="/dang-ky">
            <BsPersonPlus title="Đăng ký" />
          </a>
          <BiPlusCircle title="Đăng Bài" />
        </div>
      </div>
    </div>
  );
}

export default Header;
