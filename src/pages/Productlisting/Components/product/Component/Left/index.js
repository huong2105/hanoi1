import React, { useEffect, useState } from 'react';
import "./style.css"
import axios from "axios"
import Right from '../Right';
import ReactHtmlParser from "react-html-parser";
function Left() {
    const [listdata, setlistdata] = useState([])
    const [titleCategory, setTitleCategory] = useState("all")
    const [Catengories, setCategories] = useState([
        {
            id: 0,
            title: 'Tất cả'
        },
        {
            id: 1,
            title: 'Học tập/Làm việc nhóm'
        },
        {
            id: 2,
            title: 'Tổ chức sự kiện'
        },
        {
            id: 3,
            title: 'Cafe thú cưng'
        },
        {
            id: 4,
            title: 'Gia Đình'
        },
        {
            id: 5,
            title: 'Không gian Vintage'
        },
        {
            id: 6,
            title: 'Phong cách Hàn Quốc'
        },
        {
            id: 7,
            title: 'Cafe-Trà-Bánh'
        },
        {
            id: 8,
            title: 'View ngoài trời/trên cao'
        },
        {
            id: 9,
            title: 'Cafe sách'
        },
        {
            id: 10,
            title: 'Cafe 24/7'
        },
        {
            id: 11,
            title: 'View sống ảo đẹp'
        },
        {
            id: 12,
            title: 'View Hồ Tây'
        },
    ])

    const [id, setId] = useState(1)
    const onSubmit = (id, title) => {

        setId(id)
        setTitleCategory(title);
    }

    useEffect(async () => {

        const res = await axios.get(`https://api-review.000webhostapp.com/wp-json/wp/v2/category`);
        setlistdata(res.data)

    }, [])

    const onsetTitleCategory = () => {

        setTitleCategory("all")
        setId(null)
    }
    return (
        <>
            <div className='product-left'>
                <div className='categori'>
                    <p>Categories</p>
                    <div>
                        <div    style={{ color: titleCategory === "all" ? "#2AA0F5" : "" }} className='title' onClick={() => onsetTitleCategory("all")}>Tất cả</div>
                        {listdata?.map((item, index) => (
                            <div className='title'
                                key = {index}
                                style={{ color: item.id === id ? "#2AA0F5" : "" }}
                                onClick={() => onSubmit(item.id, item.title.rendered)}>
                                {ReactHtmlParser(item.title.rendered) ?? null}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Right titleCategory={titleCategory} />
        </>
    );
}

export default Left;