import "./index.css";

const Footer = () => {
  return (
    <div className="Footer">
      <ul className="Footer__content">
        <li>
          <img
            src="https://img.icons8.com/sf-regular/9ca7ab/home-page.png"
            alt="home"
            className="home"
          />
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios-glyphs/9ca7ab/search.png"
            alt="search"
            className="search"
          />
        </li>
        <li>
          <img
            src="https://img.icons8.com/fluency-systems-regular/9ca7ab/appointment-reminders.png"
            alt="notification"
            className="notification"
          />
        </li>
        <li>
          <img
            src="https://img.icons8.com/sf-regular/9ca7ab/secured-letter.png"
            alt="messages"
            className="messages"
          />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
