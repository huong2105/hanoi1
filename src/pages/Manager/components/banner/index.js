
import './style.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deletebanner, laybanner, postbanner } from '../../../../redux/bannermng/action';
import { Modal, Button } from "react-bootstrap";



function ManaComponent() {
    const [show, setShow] = useState(false);
    const [Title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const { data, loading } = useSelector(state => state.dulieubanner)
    console.log("loading", loading);
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(laybanner())
    }, []);

    const onSubmit = () => {
        const postBanner = { tieude: Title, anh: img[0].name }
        dispatch(postbanner(postBanner))
    }

    const deleteBanner = (id) => {
        const data = { _id: id }
        dispatch(deletebanner(data))
    }
    return (
        <div className="wrapepr-mng">
            <div className="wrapper-right-mng">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Image</th>
                            <th scope="col">CreatedAt</th>
                            <th scope="col">UpdatedAt</th>
                            <th scope="col">Act</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading === false ? data?.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.tieude ?? "Khong co data"}</td>
                                <td><img src={`/images/${item.anh}`} /></td>
                                <td>{item.createdAt}</td>
                                <td>{item.updatedAt}</td>
                                <td>
                                    <div onClick={() => deleteBanner(item._id)} >Xóa</div>
                                    <div>Sửa</div>
                                </td>
                            </tr>
                        )) : (null)}
                    </tbody>
                </table>
            </div>
            <Button style={{ position: "absolute", bottom: "0", right: "0" }} variant="primary" onClick={() => setShow(true)}>
                +
            </Button>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Thêm sản phẩm
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Title
                        <br></br>
                        <input
                            className="content-title"
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <div className="wrapper-contnet">
                        <input type="file" onChange={e => setImg(e.target.files)} />
                    </div>
                    <br></br>
                    <div>
                        <Button onClick={() => onSubmit()}> Create at</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ManaComponent;
