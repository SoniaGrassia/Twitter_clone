import "./index.css";
import { IoLogoTwitter } from "react-icons/io";
import { CiHashtag, CiViewList } from "react-icons/ci";
import { BiBell } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { IoBookmarkOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <IoLogoTwitter className="logo-twitter" />
      <ul>
        <li>
          <CiHashtag className="explore" />
          <h3>Esplora</h3>
        </li>
        <li>
          <BiBell className="notifications" />
          <h3>Notifiche</h3>
        </li>
        <li>
          <MdOutlineEmail className="message" />
          <h3>Messaggi</h3>
        </li>
        <li>
          <IoBookmarkOutline className="bookmark" />
          <h3>Segnalibri</h3>
        </li>
        <li>
          <CiViewList className="lists" />
          <h3>Liste</h3>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Sidebar;
