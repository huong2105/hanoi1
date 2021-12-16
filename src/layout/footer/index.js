
import './style.css';
import {BsTelephone} from "react-icons/bs"
import {FiMail} from "react-icons/fi"
import {GoLocation} from "react-icons/go"
function Footer() {
  return (
    <div className="App">
      <div className="wrapper-footer">
        <div className="footer-left footer">
          <div>
            <img src="/images/6510627715_bf1acfa0-6a57-427b-867d-856bcff3cd68.png" />
          </div>
        </div>
        <div className="footer-right">
        <p><BsTelephone /> +012 345 6789</p>
        <p><FiMail/> coffeeandcamp@gmail.com</p>
        <p><GoLocation /> 1234 Main Street, City, Country</p>
        </div>
      </div>
    </div >
  );
}

export default Footer;
