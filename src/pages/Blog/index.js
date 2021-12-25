import { BannerBlog } from "./components/banner"
import Breadcrumb from "./components/breadcrumb"
import { ListNewsBlog } from "./components/ListNews"
import "./style.css"
import { useParams } from 'react-router';
import BreadcrumbComponent from "../../components/Breadcrumb";

export const PageBlog = () => {

    const { slug } = useParams()
    return (
        <>
            {slug === "ca-phe" ? (
                <div className='pageblog'>
                    <BannerBlog title = "ca-phe" />
                    <BreadcrumbComponent title="Cà phê" />
                    <ListNewsBlog title="ca-phe" />
                </div>
            ) : (<div className='pageblog'>
                <BannerBlog title = "homestay" />
                <BreadcrumbComponent title="Homestay" />
                <ListNewsBlog title="homestay" />
            </div>)}
        </>

    )
}