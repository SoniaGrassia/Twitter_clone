import "./index.css";
import ModalMenu from "../modalmenu/ModalMenu";
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
      <RxHamburgerMenu className="hamburger" onClick={activateModal} />
      <ModalMenu modalView={modalView} />
      <IoLogoTwitter className="logo" />
      <HiOutlineSparkles className="sparkle_logo" />
    </div>
  );
};

export default Navbar;
