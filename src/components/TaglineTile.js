import Button from "./Button";

const TaglineTile = (props) => {
  return (
    <div className={`tagline tile-${props.width} tile-${props.color}`}>
      {props.children}
      <Button style={{margin: "0 auto", fontWeight: "bold"}}color={props.buttonColor}>{props.buttonText}</Button>
    </div>
  )
}

export default TaglineTile;
