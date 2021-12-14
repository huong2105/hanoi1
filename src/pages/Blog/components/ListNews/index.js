import { useState } from "react"
import './style.css'
import { AiOutlineComment } from "react-icons/ai"

export const ListNewsBlog = ({ title }) => {
    console.log("đây là trang của ", title);
    const [listBlogHomestay, setListBlogHomestay] = useState([
        {
            id: 1,
            img: "/images/alldaycoffee2.jpg",
            title: "Chăm chỉ học tập tại top những địa điểm Homestay ở Hà Nội yên tĩnh",
            day: "01/12/2021",
            comment: 3,
            summary: "Những địa điểm Homestay học nhóm Hà Nội là không gian lí tưởng để các bạn cùng nhau học tập và trao đổi kiến thức.",
        },
        {
            id: 2,
            img: "/images/anh.jpg",
            title: "Quán Cafe cho thuê tổ chức sự kiện ở   Hà Nội có không gian đẹp ",
            day: "01/12/2021",
            comment: 10,
            summary: "Với mức chi phí không quá cao, các quán Cafe là địa điểm lí tưởng tổ chức các buổi thảo luận, workshop, offline hội nhóm,..",
        },

        {
            id: 3,
            img: "/images/131987579_219603059631462_6040954554526691297_n.jpg",
            title: "Top 10 quán cafe thú cưng ở Hà Nội với những thú cưng so-cute",
            day: "01/12/2021",
            comment: 20,
            summary: "Ngày nay có rất nhiều người yêu thích thú cưng nên các tiệm coffee thú cưng được quân tâm, đánh giá và săn lùng khá nhiều. ",
        },

        {
            id: 4,
            img: "/images/IMG_0035.jpg",
            title: "Thỏa Thích Vui Chơi Tại Top 10 Quán Cafe Cho Trẻ Em Hà Nội",
            day: "01/12/2021",
            comment: 25,
            summary: "Sau đây là tất tần tật các địa chỉ thú vị giúp bạn và bé có được những khoảnh khắc thú vị bên nhau",
        },

        {
            id: 5,
            img: "/images/thehanoihousecafe-1-800x500.jpg",
            title: "Trở về thời xưa với những quán Cafe Hà Nội cổ chan chứa kỉ niệm",
            day: "01/12/2021",
            comment: 32,
            summary: "Đông lại về, hãy cùng nhay tìm cho mình góc nhỏ ấm cúng để  ôn lại kỉ niệm xưa.",
        },
        {
            id: 8,
            img: "/images/ba451034db7f230016f93d9bb5b8fc3a_output.jpg",
            title: "Mới toanh 10 quán cafe phong cách Hàn Quốc ở Hà Nội sống ảo siêu đẹp",
            day: "01/12/2021",
            comment: 2,
            summary: "Nếu bạn đang tìm một quán cafe phong cách Hàn Quốc ở Hà Nội thì đừng bỏ qua bài viết này nhé. ",
        },

        {
            id: 6,
            img: "/images/baked-by-julie.jpg",
            title: "La Cà tại Top những Quán Cafe Bánh Hà Nội Xinh Lung Linh",
            day: "01/12/2021",
            comment: 12,
            summary: "Bạn muốn thay đổi không khí sau những ngày dài làm việc mệt mỏi. Quán cafe bánh Hà Nội sẽ là lựa chọn hoàn hảo cho những ngày không biết đi về đâu",
        },

        {
            id: 7,
            img: "/images/cup-of-tea-330715.jpg",
            title: "Những quán Cafe ngoài trời được yêu thích nhất tại Hà Nội",
            day: "01/12/2021",
            comment: 23,
            summary: "Hà Nội vào thu, chọn ngay những quán cà phê ngoài trời lãng mạn nhất thôi nào.",
        },





        {
            id: 9,
            img: "/images/library.jpg",
            title: "Top 10 quán cafe sách Hà Nội có nhiều sách hay nhất",
            day: "01/12/2021",
            comment: 2,
            summary: "Top 10 quán Cafe sách Hà Nội sau đây đều là những quán được đánh giá cao nhờ nguồn sách độc, phong phú nhất.",
        },
        {
            id: 10,
            img: "/images/29598333_1848010665229456_121848117587716462_n.jpg",
            title: "TOP 7 quán cafe mở 24/24 ở Hà Nội cho team ‘cú đêm’",
            day: "01/12/2021",
            comment: 2,
            summary: "Nếu bạn đang cần tìm một nơi để tâm sự cùng bạn bè mỗi đêm muộn, hãy cùng tham khảo những quán cafe mở qua đêm ở Hà Nội nhé.",
        },
        {
            id: 11,
            img: "/images/bancong.jpg",
            title: "“Sống ảo” Với Top 10 Quán Cafe Đẹp, Rộng ở Hà Nội",
            day: "01/12/2021",
            comment: 2,
            summary: "Vừa nhâm nhi tách cà phê thơm ngon và được check-in sống ảo với loạt view cực đẹp tại các quán cà phê ở Hà Nội mà không phải đi đâu xa.",
        },
        {
            id: 12,
            img: "/images/nofoodphobia-quan-cafe-dep-768x959.jpg",
            title: "TOP 11 các quán cafe đẹp ở Hồ Tây view cực đỉnh (Mới nhất) ",
            day: "01/12/2021",
            comment: 2,
            summary: "Bạn muốn tìm một quán cafe để check in ở khu vực Hồ Tây? Vậy thì đừng bỏ qua bài viết dưới đây nhé! ",
        },
    ])
    const [listBlog, setListBlog] = useState([
        {
            id: 1,
            img: "/images/alldaycoffee2.jpg",
            title: "Chăm chỉ học tập tại top những quán Cafe ở Hà Nội yên tĩnh",
            day: "01/12/2021",
            comment: 3,
            summary: "Những quán Cafe học nhóm Hà Nội là không gian lí tưởng để các bạn cùng nhau học tập và trao đổi kiến thức.",
        },
        {
            id: 2,
            img: "/images/anh.jpg",
            title: "Quán Cafe cho thuê tổ chức sự kiện ở   Hà Nội có không gian đẹp ",
            day: "01/12/2021",
            comment: 10,
            summary: "Với mức chi phí không quá cao, các quán Cafe là địa điểm lí tưởng tổ chức các buổi thảo luận, workshop, offline hội nhóm,..",
        },

        {
            id: 3,
            img: "/images/131987579_219603059631462_6040954554526691297_n.jpg",
            title: "Top 10 quán cafe thú cưng ở Hà Nội với những thú cưng so-cute",
            day: "01/12/2021",
            comment: 20,
            summary: "Ngày nay có rất nhiều người yêu thích thú cưng nên các tiệm coffee thú cưng được quân tâm, đánh giá và săn lùng khá nhiều. ",
        },

        {
            id: 4,
            img: "/images/IMG_0035.jpg",
            title: "Thỏa Thích Vui Chơi Tại Top 10 Quán Cafe Cho Trẻ Em Hà Nội",
            day: "01/12/2021",
            comment: 25,
            summary: "Sau đây là tất tần tật các địa chỉ thú vị giúp bạn và bé có được những khoảnh khắc thú vị bên nhau",
        },

        {
            id: 5,
            img: "/images/thehanoihousecafe-1-800x500.jpg",
            title: "Trở về thời xưa với những quán Cafe Hà Nội cổ chan chứa kỉ niệm",
            day: "01/12/2021",
            comment: 32,
            summary: "Đông lại về, hãy cùng nhay tìm cho mình góc nhỏ ấm cúng để  ôn lại kỉ niệm xưa.",
        },
        {
            id: 8,
            img: "/images/ba451034db7f230016f93d9bb5b8fc3a_output.jpg",
            title: "Mới toanh 10 quán cafe phong cách Hàn Quốc ở Hà Nội sống ảo siêu đẹp",
            day: "01/12/2021",
            comment: 2,
            summary: "Nếu bạn đang tìm một quán cafe phong cách Hàn Quốc ở Hà Nội thì đừng bỏ qua bài viết này nhé. ",
        },

        {
            id: 6,
            img: "/images/baked-by-julie.jpg",
            title: "La Cà tại Top những Quán Cafe Bánh Hà Nội Xinh Lung Linh",
            day: "01/12/2021",
            comment: 12,
            summary: "Bạn muốn thay đổi không khí sau những ngày dài làm việc mệt mỏi. Quán cafe bánh Hà Nội sẽ là lựa chọn hoàn hảo cho những ngày không biết đi về đâu",
        },

        {
            id: 7,
            img: "/images/cup-of-tea-330715.jpg",
            title: "Những quán Cafe ngoài trời được yêu thích nhất tại Hà Nội",
            day: "01/12/2021",
            comment: 23,
            summary: "Hà Nội vào thu, chọn ngay những quán cà phê ngoài trời lãng mạn nhất thôi nào.",
        },
        {
            id: 9,
            img: "/images/library.jpg",
            title: "Top 10 quán cafe sách Hà Nội có nhiều sách hay nhất",
            day: "01/12/2021",
            comment: 2,
            summary: "Top 10 quán Cafe sách Hà Nội sau đây đều là những quán được đánh giá cao nhờ nguồn sách độc, phong phú nhất.",
        },
        {
            id: 10,
            img: "/images/29598333_1848010665229456_121848117587716462_n.jpg",
            title: "TOP 7 quán cafe mở 24/24 ở Hà Nội cho team ‘cú đêm’",
            day: "01/12/2021",
            comment: 2,
            summary: "Nếu bạn đang cần tìm một nơi để tâm sự cùng bạn bè mỗi đêm muộn, hãy cùng tham khảo những quán cafe mở qua đêm ở Hà Nội nhé.",
        },
        {
            id: 11,
            img: "/images/bancong.jpg",
            title: "“Sống ảo” Với Top 10 Quán Cafe Đẹp, Rộng ở Hà Nội",
            day: "01/12/2021",
            comment: 2,
            summary: "Vừa nhâm nhi tách cà phê thơm ngon và được check-in sống ảo với loạt view cực đẹp tại các quán cà phê ở Hà Nội mà không phải đi đâu xa.",
        },
        {
            id: 12,
            img: "/images/nofoodphobia-quan-cafe-dep-768x959.jpg",
            title: "TOP 11 các quán cafe đẹp ở Hồ Tây view cực đỉnh (Mới nhất) ",
            day: "01/12/2021",
            comment: 2,
            summary: "Bạn muốn tìm một quán cafe để check in ở khu vực Hồ Tây? Vậy thì đừng bỏ qua bài viết dưới đây nhé! ",
        },
    ])
    return (

        <div className='wrapperBlog'>
            {title === "Cà phê" ? listBlog.map((item, index) => (

                <div className={index === 1 || index === 4 || index === 7 || index === 10 ? `contentblog itemblog` : `contentblog`}>
                    <a href="/danh-sach-dia-diem">
                        <div className='wrapperimg'>
                            <img src={`${item.img}`} className='imgblog' />
                        </div>
                    </a>
                    <a href="/danh-sach-dia-diem">
                        <div className="wrapper-content-blog">
                            <div className='titleBlog' title={item.title}>{item.title}</div>
                            <div className='comment'>
                                <div> {item.day} </div>
                                <div className="infocomment"> <AiOutlineComment /> {item.comment} lượt xem </div>
                            </div>
                            <div className={index === 1 && index === 4 && index === 7 && index === 10 ? 'summary' : 'summary summary1'} >{item.summary}</div>
                        </div>
                    </a>
                </div>
            )) : listBlogHomestay.map((item, index) => (

                <div className={index === 1 || index === 4 || index === 7 || index === 10 ? `contentblog itemblog` : `contentblog`}>
                    <a href="/danh-sach-dia-diem">
                        <div className='wrapperimg'>
                            <img src={`${item.img}`} className='imgblog' />
                        </div>
                    </a>
                    <a href="/danh-sach-dia-diem">
                        <div className="wrapper-content-blog">
                            <div className='titleBlog' title={item.title}>{item.title}</div>
                            <div className='comment'>
                                <div> {item.day} </div>
                                <div className="infocomment"> <AiOutlineComment /> {item.comment} lượt xem </div>
                            </div>
                            <div className={index === 1 && index === 4 && index === 7 && index === 10 ? 'summary' : 'summary summary1'} >{item.summary}</div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}