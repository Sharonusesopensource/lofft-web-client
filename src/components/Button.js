const Button = (props) => {
  return (
    <div className={`button ${props.color ? `button-${props.color}` : ""}`} style={props.style}>
      {props.children}
    </div>
  )
}

export default Button;
