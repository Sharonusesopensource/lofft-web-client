const Button = (props) => {
  return (
    <div className={`button ${props.color ? `button-${props.color}` : ""}`}>
      {props.children}
    </div>
  )
}

export default Button;
