import "./index.css";

const ModalPutMessage = ({ setIsVisible }) => {
  const onHandleClick = () => {
    setIsVisible(false);
  };
  return (
    <div className="ModalPutMessage">
      <div className="ModalPutMessage__overlay" onClick={onHandleClick}></div>
      <div className="ModalPutMessage__content">
        <h3 className="ModalPutMessage__title">Modifica il Tweet</h3>
        <form className="ModalPutMessage__form">
          <input
            className="ModalPutMessage__name"
            type="text"
            placeholder="UserName"
          />
          <input
            className="ModalPutMessage__email"
            type="text"
            placeholder="Email"
          />
          <input
            className="ModalPutMessage__msg"
            type="textarea"
            placeholder="Modifica il post"
          />
          <input className="ModalPutMessage__btn" type="button" value="Tweet" />
        </form>
      </div>
    </div>
  );
};

export default ModalPutMessage;
