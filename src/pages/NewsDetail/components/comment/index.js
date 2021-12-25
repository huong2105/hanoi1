import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { API_URL } from "../../../../utils";
import { useHistory } from "react-router-dom";
export const Comment = ({ slug }) => {
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
  const [idReply, setidReply] = useState(null);
  const [idReply1, setidReply1] = useState(null);
  const [writeComment, setWriteComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const reply = (id) => {
    setidReply(id);
  };

  const reply1 = (id) => {
    setidReply1(id);
  };

  const gui = () => {
    setidReply1(null);
    setidReply(null);
  };

  const sendComment = async () => {
    if (name !== "" && email !== "" && comment !== "") {
      const data = {
        userName: name,
        email,
        comment: writeComment,
        title: slug,
      };
      await axios.post(`${API_URL}/comment`, data);
    }

    setWriteComment("");
    setEmail("");
    setName("");
    window.location.reload();
  };

  useEffect(async () => {
    const res = await axios.get(`${API_URL}/comment/title=${slug}`);
    setComment(res.data);
  }, []);

  return (
    <div className="wrapper-comment">
      <div className="comment">Bình Luận</div>
      {comment && comment.length > 0
        ? comment.map((item, index) => (
            <>
              <div className="infocommentnews" key={index}>
                <div className="avtcomment">
                  <img
                    src={`${
                      item.avatart ??
                      "/images/1bdfcb747b5a688e2b38ffe5d30a1385.jpg"
                    }`}
                    alt=""
                  />
                </div>
                <div className="noidungbinhluan">
                  <div className="usercomment">
                    <p>{item.userName}</p>
                    <div>|</div>
                    <div>{moment(item.createdAt).format("DD-MM-YYYY")}</div>
                  </div>
                  <span>{item.comment}</span>
                  {/* <div className="reply">
                                {item._id === idReply ? <>
                                    <form method="POST">
                                        <input type="text" placeholder="Nhập phản hồi của bạn" />
                                        <button type="submit" onClick={() => gui(item._id)}>Gửi</button>
                                    </form>
                                </> : (null)}

                                {item.id === idReply ? null : <>
                                    <div>
                                        <TiArrowBack />
                                    </div>
                                    <div onClick={() => reply(item.id)}>
                                        Trả lời
                                    </div>
                                </>}
                            </div> */}
                </div>
              </div>
              {/* {item.reply.map((item, index) => (
                        <div className='infocommentnews infocommentnewsreply' key={index}>
                            <div className='avtcomment'>
                                <img src={`${item.avatart}`} alt="" />
                            </div>
                            <div className='noidungbinhluan'>
                                <div className='usercomment'>
                                    <p>{item.name}</p>
                                    <div>|</div>
                                    <div>{item.time}</div>
                                </div>
                                <span>{item.content}</span>
                                <div className="reply">
                                    {item.id === idReply1 ? <>
                                        <form method="POST">
                                            <input type="text" placeholder="Nhập phản hồi của bạn" />
                                            <button type="submit" onClick={() => gui(item.id)}>Gửi</button>
                                        </form>

                                    </> : (null)}
                                    {item.id === idReply1 ?
                                        null
                                        : <>  <div>
                                            <TiArrowBack />
                                        </div>
                                            <div onClick={() => reply1(item.id)}>
                                                Trả lời
                                            </div></>}
                                </div>
                            </div>
                        </div>
                    ))} */}
            </>
          ))
        : null}

      <div className="postcomment">
        <div className="title-comment">Để Lại Bình Luận</div>
        <div className="successinfo">
          Thông tin của bạn sẽ được bảo mật. Vui lòng nhập thông tin bắt buộc *
        </div>
        <div className="inputcomment">
          <input
            value={writeComment}
            onChange={(e) => setWriteComment(e.target.value)}
            className="writecomment"
            type="text"
            placeholder="Nhập bình luận của bạn..."
          />
          <div className="inputnameemail">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="writeemail"
              type="text"
              placeholder="Tên *"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="writeemail"
              type="text"
              placeholder="Email *"
            />
          </div>
          <div className="saveinfo">
            <input type="checkbox" />
            <div>Lưu thông tin của bạn cho nhưng lần bình luận tiếp theo !</div>
          </div>
          <div className="buttonpostcomment">
            <button onClick={() => sendComment()}>Gửi Bình Luận</button>
          </div>
        </div>
      </div>
    </div>
  );
};
