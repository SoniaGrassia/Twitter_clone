import "./index.css";
import { BiHomeCircle, BiSearch, BiBell } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="Footer">
      <ul className="Footer__content">
        <li>
          <BiHomeCircle className="home" />
        </li>
        <li>
          <BiSearch className="search" />
        </li>
        <li>
          <BiBell className="notification" />
        </li>
        <li>
          <MdOutlineEmail className="messages" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
