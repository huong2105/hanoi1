import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListProduct } from '../../../../redux/ListProduct/action'
export const PageListproducts = () => {

    const {dataListProduct} = useSelector(state => state.ListReducer)
    console.log("ListProduct",dataListProduct );

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListProduct())
    },[])
    return (
        <><table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Images-1</th>
                    <th scope="col">Images-2</th>
                    <th scope="col">Images-3</th>
                    <th scope="col">Images-4</th>
                    <th scope="col">Images-5</th>
                    <th scope="col">Act</th>
                </tr>
            </thead>
            <tbody>
                {dataListProduct.map((item,index) => (<tr>
                    <th scope="row">1</th>
                    <td>{item.tieude}</td>
                    <td style ={{backgroundImage:`url('/images/${item.anhtieude}')`}}>
                        a
                    </td>
                    <td style ={{backgroundImage:`url('/images/${item.anhsanpham1}')`}}>b</td>
                    <td style ={{backgroundImage:`url('/images/${item.anhsanpham2}')`}}>b</td>
                    <td style ={{backgroundImage:`url('/images/${item.anhsanpham3}')`}}>b</td>
                    <td style ={{backgroundImage:`url('/images/${item.anhsanpham4}')`}}>b</td>
                    <td>
                        <div>Sửa</div>
                        <div>Xóa</div>
                    </td>
                </tr>))}
            </tbody>
        </table></>
    )
}