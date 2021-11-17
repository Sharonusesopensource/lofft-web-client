import {popups} from '../popups'


const Modal = ({data, toggleModal}) => {

  const clickModal = ({target}) => {
    if (target.className === "modal") {
      toggleModal();
    }
  }

  if(data.type === "tag") {
    return (
      <div className="modal" onClick={clickModal}>
       <div className="popup">
        <img
        src={process.env.PUBLIC_URL + '/icons/close-icon.png'}
        className="popup-close"
        alt="X"
        onClick={toggleModal}
      />
         <h2>{popups[data.key].title}</h2>
         <img src={process.env.PUBLIC_URL + '/illustrations/' + popups[data.key].image} alt="illustration"/>
         <p>{popups[data.key].text}</p>
       </div>
      </div>
    )
  } else {
    return (
      <h3>MODAL FAIL</h3>
    )
  }
}

export default Modal
