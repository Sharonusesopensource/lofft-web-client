import handshake from "./../handshake.svg";

const Modal = () => {
  return (
    <div className="modal">
     <div className="popup">
       <h2>Meet your people</h2>
       <img src={handshake} alt="handshake"/>
       <p>Our unique algorithm matches you with the flatmates that suit you best. You choose what's important to you — and what information you wish to share about yourself. Lofft will do the rest, and present you with a shortlist of only the best places or candidates.</p>
     </div>
    </div>
  )
}

export default Modal
