const PeoplePopup = (props) => {
  return(
    <div className="member-frame">
      <h1>{props.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore distinctio, nesciunt accusantium illum repudiandae. Sed, quibusdam dolorum deserunt accusamus fuga cumque eum sint unde ullam corrupti quas, voluptas porro.</p>
      <div className="hobby-bar">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className="active"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default PeoplePopup