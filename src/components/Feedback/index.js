import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedBack } from "../../redux/FeedBack/action";
import { useCookies } from "react-cookie";

import "./style.css";
const Feedback = () => {
  const { dataFeedback } = useSelector((state) => state.FeedbackReducer);
  const getCookies = useCookies();
  console.log("dataFeedback", dataFeedback);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getFeedBack({ email: getCookies[0].email, status: getCookies[0].status })
    );
  }, []);
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Email</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Công ty</th>
            <th scope="col">Chức vụ</th>
            <th scope="col">Nội dung</th>
          </tr>
        </thead>
        <tbody>
          {dataFeedback && dataFeedback.length > 0
            ? dataFeedback.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.userName ?? "Không có"}</td>
                  <td>
                    {item.email ? (
                      <a href={`mailto:${item.email}`}>{item.email}</a>
                    ) : (
                      "không có"
                    )}
                  </td>
                  <td>{item.phone ?? "Không có"}</td>
                  <td>{item.company ?? "Không có"}</td>
                  <td>{item.position ?? "Không có"}</td>
                  <td className="content-feedback">
                    {item.content ?? "Không có"}
                  </td>
                </tr>
              ))
            : <div className="notfeedback">Bạn chưa có phản hồi nào</div>}
        </tbody>
      </table>
    </div>
  );
};

export default Feedback;
