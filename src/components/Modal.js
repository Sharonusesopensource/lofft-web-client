import {popups} from '../popups'

const Modal = ({data}) => {

  if(data.type === "tag") {
    return (
      <div className="modal">
       <div className="popup">
         <h2>{popups[data.key].title}</h2>
         <img src={process.env.PUBLIC_URL + '/illustrations/' + popups[data.key].image} alt="handshake"/>
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
