import "./style.css"
export const Banner = ({ data }) => {
    
    return (

        data && data.length > 0 ? (<div className = "bannerNewsDetail">
            <img src = {`${data[0].acf.img1.url}`}  />
        </div>) : (null)

    )
}