import React from "react";
import { popups } from "../popups";
import PeoplePopup from "./PeoplePopup";

const Modal = ({ data, toggleModal }) => {
  const clickModal = ({ target }) => {
    if (target.className === "modal") {
      toggleModal();
    }
  };

  return (
    <div className="modal" onClick={clickModal}>
      <div className="popup">
        <img
          src={process.env.PUBLIC_URL + "/icons/close-icon.png"}
          className="popup-close"
          alt="X"
          onClick={toggleModal}
        />

        {data.type === "tag" && (
          <div>
            <h2 className="tag-title">{popups[data.key].title}</h2>
            <div className="tag-images">
              {popups[data.key].images.map((image) => (
                <img
                  className="tag-image"
                  key={image}
                  src={image}
                  alt="illustration"
                />
              ))}
            </div>
            <p className="tag-text">{popups[data.key].text}</p>
          </div>
        )}
        {data.type === "person" && <PeoplePopup person={data.key} />}
      </div>
    </div>
  );
};

export default Modal;
