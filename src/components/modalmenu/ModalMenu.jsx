import "./index.css";
import listMessage from "../../mock/listMessage";
import { BiX, BiUser } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiFillTwitterSquare, AiOutlineMessage } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { BsPersonHeart } from "react-icons/bs";

const ModalMenu = ({ modalView }) => {
  return (
    <div className={`ModalMenu ${modalView ? "" : "disabled"}`}>
      <div className="ModalMenu__content">
        <div className="ModalMenu__up">
          <h3>Informazioni account</h3>
          <BiX className="exit-icon" />
        </div>

        <div className="ModalMenu__center">
          <div className="ModalMenu__center__up">
            <img
              className="ModalMenu__photo"
              src={listMessage[0].photo}
              alt="photo-profile"
            />
            <IoIosAddCircleOutline className="add-btn" />
          </div>
          <h3 className="userName">{listMessage[0].name}</h3>
          <p className="email">{listMessage[0].email}</p>
        </div>

        <ul className="ModalMenu__bottom">
          <li>
            <BiUser className="profile" />
            <h3>Profilo</h3>
          </li>
          <li>
            <AiFillTwitterSquare className="twitter-blue" />
            <h3>Twitter Blue</h3>
          </li>
          <li>
            <AiOutlineMessage className="topics" />
            <h3>Argomenti</h3>
          </li>
          <li>
            <IoBookmarkOutline className="bookmarks" />
            <h3>Segnalibri</h3>
          </li>
          <li>
            <CiViewList className="list" />
            <h3>Liste</h3>
          </li>
          <li>
            <BsPersonHeart className="twitter-circle" />
            <h3>Twitter Circle</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModalMenu;
