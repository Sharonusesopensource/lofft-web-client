import Button from "./Button";

const TaglineTile = (props) => {
  return (
    <div className={`tagline tile-${props.width} tile-${props.color}`}>
      {props.children}
      <Button/>
    </div>
  )
}

export default TaglineTile;
