const Slider = ({ question, value }) => {
  const ICONS = {
    animal: ["dog", "cat"],
    vacation: ["beach", "mountain"],
    drink: ["beer", "wine"],
    media: ["podcast", "movie"],
  }

  const generateListItems = () => {
    let content = []
    for (let i = 0; i < 12; i++) {
      i === value
        ? content.push(<li className="active" key={i}></li>)
        : content.push(<li key={i}></li>)
    }
    return content
  }

  return (
    <div className="hobby-bar">
      <img src={process.env.PUBLIC_URL + `/icons/${ICONS[question][0]}.svg`} alt={ICONS[question][0]} />
      <div className="slider">
        <ul>{generateListItems()}</ul>
      </div>
      <img src={process.env.PUBLIC_URL + `/icons/${ICONS[question][1]}.svg`} alt={ICONS[question][1]} />
    </div>
  )
}

export default Slider
