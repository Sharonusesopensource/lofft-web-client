import Slider from "./Slider"

const PeoplePopup = ({person}) => {
  return (
    <div className="member-frame">
      <div className="member-header">
        <h1>{person.name}</h1>
        <p className="member-description">{person.description}</p>
      </div>
      <div className="member-frame-content">
        <div className="member-interests">
          <p className="interest-title">What does {person.name} like?</p>
          <Slider question="animal" value={person.animal} />
          <Slider question="vacation" value={person.vacation} />
          <Slider question="drink" value={person.drink} />
          <Slider question="media" value={person.media} />
        </div>
        <div className="member-right-panel">
          <img
            src={process.env.PUBLIC_URL + `/people/${person.image}`}
            alt={person.name}
            className="modal-avatar"
          />
          <p>{person.role}</p>
          <div className="member-icons">
            {person.links.map((link) => (
              <a href={`${link.url}`} target="_blank" rel="noreferrer">
                <img
                  src={process.env.PUBLIC_URL + `/icons/${link.icon}`}
                  alt=""
                  className="social-icon button"
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
