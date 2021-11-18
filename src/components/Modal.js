import {popups} from '../popups'
import PeoplePopup from './PeoplePopup';

const Modal = ({data, toggleModal}) => {

  const clickModal = ({target}) => {
    if (target.className === "modal") {
      toggleModal();
    }
  }

    return (
      <div className="modal" onClick={clickModal}>
       <div className="popup">
          <img
          src={process.env.PUBLIC_URL + '/icons/close-icon.png'}
          className="popup-close"
          alt="X"
          onClick={toggleModal}/>

        {data.type === "tag" && (<div>
            <h2>{popups[data.key].title}</h2>
            <img src={process.env.PUBLIC_URL + '/illustrations/' + popups[data.key].image} alt="illustration"/>
            <p>{popups[data.key].text}</p>
          </div>)
        }
        {data.type === "person" && <PeoplePopup person={data.key}/>}
       </div>
      </div>
    )
}

export default Modal
