import "./index.css";
import listMessage from "../../mock/listMessage";
import { IoLogoTwitter } from "react-icons/io";
import { CiHashtag, CiViewList, CiCircleMore } from "react-icons/ci";
import { BiBell } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { IoBookmarkOutline } from "react-icons/io5";

const SidebarPopulator = () => {
  return (
    <div className="SidebarPopulator">
      <IoLogoTwitter className="Sidebar__logo-twitter" />
      <ul className="Sidebar__ul">
        <li className="Sidebar__explore">
          <CiHashtag className="Sidebar__explore-icon" />
          <h3>Esplora</h3>
        </li>
        <li className="Sidebar__notifications">
          <BiBell className="Sidebar__notifications-icon" />
          <h3>Notifiche</h3>
        </li>
        <li className="Sidebar__message">
          <MdOutlineEmail className="Sidebar__message-icon" />
          <h3>Messaggi</h3>
        </li>
        <li className="Sidebar__bookmark">
          <IoBookmarkOutline className="Sidebar__bookmark-icon" />
          <h3>Segnalibri</h3>
        </li>
        <li className="Sidebar__lists">
          <CiViewList className="Sidebar__lists-icon" />
          <h3>Liste</h3>
        </li>
        <li className="Sidebar__user">
          <img
            className="Sidebar__user-photo"
            src={listMessage[0].photo}
            alt="photo-profile"
          />
          <h3>Profilo</h3>
        </li>
        <li className="Sidebar__more">
          <CiCircleMore className="Sidebar__more-icon" />
          <h3>Altro</h3>
        </li>
        <li></li>
      </ul>
      <button className="Sidebar__btn">Tweet</button>
    </div>
  );
};

export default SidebarPopulator;
