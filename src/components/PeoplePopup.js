import Slider from "./Slider"
const PeoplePopup = ({ person, toggleModal }) => {
  return (
    <div className="member-frame">
      <img
        src={`/icons/close-icon.png`}
        alt=""
        id="close-model-icon"
        onClick={toggleModal}
      />
      <div className="member-header">
        <h1>{person.name}</h1>
        <p>{person.description}</p>
      </div>
      <div className="member-frame-content">
        <div className="member-interests">
          <Slider question="animal" value={person.animal} />
          <Slider question="vacation" value={person.vacation} />
          <Slider question="drink" value={person.drink} />
          <Slider question="media" value={person.media} />
        </div>
        <div className="member-right-panel">
          <img
            src={`/people/${person.image}`}
            alt=""
            className="modal-avatar"
          />
          <p>{person.role}</p>
          <div className="member-icons">
            {person.links.map((link) => (
              <a href={`${link.url}`} target="_blank" rel="noreferrer">
                <img
                  src={`/icons/${link.icon}`}
                  alt=""
                  className="social-icon"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeoplePopup
