import "./index.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="hamburger_menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <img
        src="https://img.icons8.com/color/512/twitter.png"
        alt="logo_twitter"
        className="logo"
      />
      <img
        src="https://img.icons8.com/ios/01b9f5/sparkling.png"
        alt="sparkle_logo"
        className="sparkle_logo"
      />
    </div>
  );
};

export default Navbar;
