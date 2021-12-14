
import './style.css';

function Footer() {
  return (
    <div className="App">
      <div className="wrapper-footer">
        <div className="footer-left footer">
          <div>
            <img src="/images/cafe-removebg-preview.png" />
            <img src="/images/pngtree-homestay-icon-image_2223544-removebg-preview.png" />
          </div>
          <p>
            Đây là blog du lịch chuyên review những trải nghiệm du lịch đúng nhất dành cho các bạn trẻ có đam mê đi đó đây,
            đi phượt, tự túc hoặc đi theo tour du lịch. Hãy ủng hộ blog của Mèo nhé!
          </p>
        </div>
        <div className="footer-center footer">
        </div>
        <div className="footer-right footer">
          <span>Từ khóa được tìm kiếm nhiều:</span>
          <br></br>
          <br></br>
          <p>
            Quán cafe đẹp
            <br></br>
            <br></br>
            Homestay đẹp
            <br></br>
            <br></br>
            Kinh nghiệm du lịch
            <br></br>
            <br></br>
            Địa điểm ăn uống
          </p>
        </div>
      </div>
    </div >
  );
}

export default Footer;
