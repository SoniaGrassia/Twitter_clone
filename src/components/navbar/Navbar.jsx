import "./index.css";
import ModalMenu from "../modalmenu/ModalMenu";
import PostTweet from "../posttweet";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoTwitter } from "react-icons/io";
import { HiOutlineSparkles } from "react-icons/hi";

const Navbar = () => {
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
      <div className="Navbar__down">
        <PostTweet />
      </div>
    </div>
  );
};

export default Navbar;
