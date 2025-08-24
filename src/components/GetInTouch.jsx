import './GetInTouch.css';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className="get-in-touch-box">
      <p className='get-in-touch-heading'>Get In Touch!</p>
      <div className="get-in-touch">
        <p className='get-in-touch-info'>
          Feel free to reach out via mail or connect with me on social media!
        </p>

        <div className="contact-list">
          <div className="contact-item">
            <MdEmail className="contact-icon email" />
            <span>vismayajagadeesh5@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaLinkedin className="contact-icon linkedin" />
            <span>linkedin.com/in/vismaya-jagadeesh</span>
          </div>

          <div className="contact-item">
            <FaGithub className="contact-icon github" />
            <span>github.com/VismayaJagadeesh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
