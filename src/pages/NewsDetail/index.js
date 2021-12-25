import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wpGetListProduct } from '../../redux/ListProduct/action';
import ReactHtmlParser from "react-html-parser";
import "./style.css"
import { useParams } from 'react-router';
import { getNewsDetail } from '../../redux/NewsDetail/action';
import { Banner } from './components/banner';
import { Comment } from './components/comment';
import { AiOutlineComment } from "react-icons/ai"
import moment from "moment"
import { API_URL } from '../../utils';
import axios from 'axios';

function PageNewsDtail() {
    console.log();
    const {ad, slug} = useParams()
    const [comment, setComment] = useState([
        {
          id: 0,
          avatart:
            "https://s3-alpha-sig.figma.com/img/1eca/6b43/958786b91d59a153562135693a8a910d?Expires=1639958400&Signature=YDtZEC9uDEjYyq-ZbbF4662Lb4LjB6WVeFjfFiTUXhABB~cE9paeL0zLHiOrgUE5txtZd7s4nzLmbFxWVJW7f4i3krtnraIcIzpHaE05AKNDyq1W7gk1I0XMy5dnGa5bwllyRoav5NDHDPUXao6-YPBp2NQ0lznqdOeOOmfWbE6o0zEjjdlYQoXYFFAUlSEMgylGguettHSrbvBNzDnmbAxCEV0d32IG5VSlxx-Ay0dAd5AzOybeq1dpDAjFvfPx9lYVZd7XJI3WO0ePcC-Rp5bT2y0jid3JGQmZTTGpZdJHUK4wpTPbwtFA0NbfuxO52lqrUDkTdZ9hU4TwiDMDYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          name: "Trần Văn Huy",
          time: "1 giờ trước",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis tellus scelerisque placerat sagittis tempus porttitor lorem. Cras ornare odio orci, duis. Velit gravida sed adipiscing pellentesque massa nunc. Faucibus eget risus ac euismod sapien.",
          reply: [
            {
              id: 0,
              avatart:
                "https://s3-alpha-sig.figma.com/img/c4ed/f102/2e8d8e4f5e65a3d48109b8bdbea95a8b?Expires=1639958400&Signature=ddIg-Y7QBcYXmSg1swDLHr9Tu9qs1BWZDxaNgQVmn9yKMowurQ1YwTOu30jFPsao0vYMwBIce64ekGV4QbqJAlFnVZNP99TmJ0f1ToKcaQE8oBCYOErqgh0UV7o~RAkWWZpb7igXOOwDGD9OJdEKKGch3ZIpn1N612~NkBofbcHzCZ-3t6hsyi0btcd3H7LN4ooXib6ljhESjhUbMaNPIRNbm1yTooF4Zev6GNdD4BO7oeUomd6SRhLoKsp6KMbbMyGfkEq6VhRPD3k7kNb-NtW5G~qKkWR6KXdbvnMVqeXxF8nYAGh5up0rdaDje8P5iq5HwvqgEhWuax564BJKfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              name: "Đỗ Thị Hương",
              time: "1 giờ trước",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis tellus scelerisque placerat sagittis tempus porttitor lorem. Cras ornare odio orci, duis. Velit gravida sed adipiscing pellentesque massa nunc. Faucibus eget risus ac euismod sapien.",
            },
          ],
        },
        {
          id: 1,
          avatart:
            "https://s3-alpha-sig.figma.com/img/1eca/6b43/958786b91d59a153562135693a8a910d?Expires=1639958400&Signature=YDtZEC9uDEjYyq-ZbbF4662Lb4LjB6WVeFjfFiTUXhABB~cE9paeL0zLHiOrgUE5txtZd7s4nzLmbFxWVJW7f4i3krtnraIcIzpHaE05AKNDyq1W7gk1I0XMy5dnGa5bwllyRoav5NDHDPUXao6-YPBp2NQ0lznqdOeOOmfWbE6o0zEjjdlYQoXYFFAUlSEMgylGguettHSrbvBNzDnmbAxCEV0d32IG5VSlxx-Ay0dAd5AzOybeq1dpDAjFvfPx9lYVZd7XJI3WO0ePcC-Rp5bT2y0jid3JGQmZTTGpZdJHUK4wpTPbwtFA0NbfuxO52lqrUDkTdZ9hU4TwiDMDYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          name: "Trần Văn Huy",
          time: "1 giờ trước",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis tellus scelerisque placerat sagittis tempus porttitor lorem. Cras ornare odio orci, duis. Velit gravida sed adipiscing pellentesque massa nunc. Faucibus eget risus ac euismod sapien.",
          reply: [
            {
              id: 1,
              avatart:
                "https://s3-alpha-sig.figma.com/img/c4ed/f102/2e8d8e4f5e65a3d48109b8bdbea95a8b?Expires=1639958400&Signature=ddIg-Y7QBcYXmSg1swDLHr9Tu9qs1BWZDxaNgQVmn9yKMowurQ1YwTOu30jFPsao0vYMwBIce64ekGV4QbqJAlFnVZNP99TmJ0f1ToKcaQE8oBCYOErqgh0UV7o~RAkWWZpb7igXOOwDGD9OJdEKKGch3ZIpn1N612~NkBofbcHzCZ-3t6hsyi0btcd3H7LN4ooXib6ljhESjhUbMaNPIRNbm1yTooF4Zev6GNdD4BO7oeUomd6SRhLoKsp6KMbbMyGfkEq6VhRPD3k7kNb-NtW5G~qKkWR6KXdbvnMVqeXxF8nYAGh5up0rdaDje8P5iq5HwvqgEhWuax564BJKfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              name: "Đỗ Thị Hương",
              time: "1 giờ trước",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis tellus scelerisque placerat sagittis tempus porttitor lorem. Cras ornare odio orci, duis. Velit gravida sed adipiscing pellentesque massa nunc. Faucibus eget risus ac euismod sapien.",
            },
          ],
        },
      ]);
    const { data } = useSelector(state => state.newsDetailReducer)
    console.log("data", data);
    const disptach = useDispatch()
    useEffect(async () => {
        const res = await axios.get(`${API_URL}/comment/title=${slug}`);
        console.log(res);
        setComment(res.data)
      }, []);
    useEffect( async () => {
      
        disptach(getNewsDetail({ad,slug}))
    }, [slug])
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
                            <div className='ngaydangbai'>{moment(data[0].date).format("DD-MM-YYYY")}</div>
                            <div className='luotbinhuan'><AiOutlineComment /> {comment.length > 0 ? (comment.length ) : 0} bình luận</div>
                        </div>
                        {ReactHtmlParser(data[0].content.rendered)}
                        </div>
                      
                         : (null)}
                    </div></div>)
                 : (null)}
            </div>
            
            <Comment slug = {slug} />
        </div>
    );
}

export default PageNewsDtail;