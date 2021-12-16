
import './style.css';
import { BiSearchAlt, BiPlusCircle } from "react-icons/bi"
import { BsPersonPlus, BsPersonCircle } from "react-icons/bs"
import { CgMail } from "react-icons/cg"
import { useState } from 'react';
import { AiOutlinePhone } from "react-icons/ai"
import {GrCircleQuestion} from "react-icons/gr"
import { useCookies } from "react-cookie";
function Header() {

    const [input, setInput] = useState(0)
    const [idHeader, setIdHeader] = useState(1)
    const [token, setToken, removeCookie] = useCookies()
    const [header, setHeader] = useState([
        {

            id: 1,
            title: "Trang chủ",
            link: "/"
        },
        {

            id: 2,
            title: "cà phê",
            link: "/blog/ca-phe",
        },
        {

            id: 3,
            title: "homestay",
            link: "/blog/homestay"
        },
    ])
    const onsubmit = () => {

        setInput(1)
    }
    const onSetIdHeader = (id) => {
        // setToken("idheader", id)
    }
    const getCookies = useCookies();
    const removieCookies = () => {

        removeCookie("token")
    }
    return (
        <div className="App1">
            <div className="header-top">
                <div className="content-left">
                    <a href="tel:0000xxxxx"> <AiOutlinePhone />123 456 789</a>
                    <div>|</div>
                    <a href="mailto: abc@gmail.com"> <CgMail /> coffeeandcamp@gmail.com </a>

                </div>
                {getCookies[0].token ? (
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
            <div className='infoheader'>
                <div>
                    <img src="/images/6510627715_bf1acfa0-6a57-427b-867d-856bcff3cd68.png" className='logo-header' />
                </div>
                {header.map((item, index) =>
                    <>
                        <a href={`${item.link}`} key={index}>
                            <span onClick={() => onSetIdHeader(item.id)}>{item.title}
                            </span>
                        </a>
                    </>)}
                {/* <span>Trang chủ</span>
                <a href="/blog"> <span>Cà phê</span></a>
                <span>Homestay</span> */}
                <div className='iconheader'>
                    {input === 0 ? (null) : <input type="text" />}

                    <BiSearchAlt title='Tìm kiếm' onClick={() => onsubmit()} />
                    <a href='/dang-ky'><BsPersonPlus title='Đăng ký' /></a>
                    <BiPlusCircle title="Đăng Bài" />
                    <a href = '/phan-hoi'><GrCircleQuestion tile = "Phản hồi" /></a>
                </div>
            </div>
        </div>
    );
}

export default Header;
