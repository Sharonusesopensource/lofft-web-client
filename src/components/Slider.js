const Slider = ({ question, value }) => {
  const ICONS = {
    animal: ["cat", "dog"],
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
      <img src={`/icons/${ICONS[question][0]}.png`} alt="" />
      <div className="slider">
        <ul>{generateListItems()}</ul>
      </div>
      <img src={`/icons/${ICONS[question][1]}.png`} alt="" />
    </div>
  )
}

export default Slider
