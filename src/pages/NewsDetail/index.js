import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wpGetListProduct } from '../../redux/ListProduct/action';
import ReactHtmlParser from "react-html-parser";
import "./style.css"
import { useParams } from 'react-router';
import { getNewsDetail } from '../../redux/NewsDetail/action';
import { Banner } from './components/banner';
import { Comment } from './components/comment';
import { AiOutlineComment } from "react-icons/ai"

function PageNewsDtail() {

    const { slug } = useParams()
    const { data } = useSelector(state => state.newsDetailReducer)
    const disptach = useDispatch()
    useEffect(() => {
        disptach(getNewsDetail(slug))
    }, [])
    return (
        <div className='wrapeprtintucchitiet'> 
            <Banner data={data} />
            <div>
                {data && data.length > 0 ? (
                <div className='wrappernoidung'>
                    <div className='noidung'>
                        {data && data.length > 0 ? <div className='wrappernoidungchitietbaiviet'>  
                        <div className='NameDetail'>{ReactHtmlParser(data[0].title.rendered)}</div>
                        <div className='thongtinchitietbaiviet'>
                            <div className='nguoidangbai'> Bởi Admin </div>
                            <div className='ngaydangbai'>01/12/2021</div>
                            <div className='luotbinhuan'><AiOutlineComment /> 2 bình luận</div>

                        </div>
                        {ReactHtmlParser(data[0].content.rendered)}
                        </div>
                      
                         : (null)}
                    </div></div>)
                 : (null)}
            </div>
            
            <Comment />
        </div>
    );
}

export default PageNewsDtail;