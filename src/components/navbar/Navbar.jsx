import { useState } from "react";
import "./index.css";
import ModalMenu from "../modalmenu/ModalMenu";
import PostTweet from "../posttweet";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoTwitter } from "react-icons/io";
import { HiOutlineSparkles } from "react-icons/hi";

const Navbar = ({ hidden }) => {
  const [modalView, setModalView] = useState(false);

  const activateModal = () => {
    setModalView(!modalView);
  };

  return (
    <div className="Navbar">
      <div className="Navbar__up">
        <RxHamburgerMenu className="hamburger" onClick={activateModal} />
        <ModalMenu modalView={modalView} />
        <IoLogoTwitter className="logo" />
        <HiOutlineSparkles className="sparkle_logo" />
      </div>
      //TODO:Navbar__down deve diventare un componente per far si che allo
      scroll scompaia
      <div className={`Navbar__down ${hidden ? "hidden" : ""}`}>
        <PostTweet />
      </div>
    </div>
  );
};

export default Navbar;
