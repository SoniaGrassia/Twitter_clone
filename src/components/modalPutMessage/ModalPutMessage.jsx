import { useState } from "react";
import "./index.css";
//TODO: se metto onClick nel submit mi spunta questo: Form submission canceled because the form is not connected

const ModalPutMessage = ({ setIsVisible, idMessage }) => {
  const [msgInput, setMsgInput] = useState("");

  const onHandleClick = () => {
    setIsVisible(false);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://dummyjson.com/posts/${idMessage}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        body: msgInput,
      }),
    });
  };

  return (
    <div className="ModalPutMessage">
      <div className="ModalPutMessage__overlay" onClick={onHandleClick}></div>
      <div className="ModalPutMessage__content">
        <h3 className="ModalPutMessage__title">Modifica il Tweet</h3>
        <button className="ModalPutMessage__exit" onClick={onHandleClick}>
          X
        </button>
        <form className="ModalPutMessage__form" onSubmit={onHandleSubmit}>
          <input
            className="ModalPutMessage__name"
            type="text"
            placeholder="UserName"
            required
          />
          <input
            className="ModalPutMessage__email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="ModalPutMessage__msg"
            type="textarea"
            placeholder="Modifica il post"
            required
          />
          <input
            className="ModalPutMessage__btn"
            type="submit"
            value="Tweet"
            // onClick={onHandleClick}
          />
        </form>
      </div>
    </div>
  );
};

export default ModalPutMessage;
