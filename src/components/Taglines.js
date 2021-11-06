import TaglineTile from "./TaglineTile";

const Taglines = () => {
  return (
    <div className="taglines">
      <div className="tilerow">
        <TaglineTile color="lavender" width="half">
          <h3 style={{color: "white"}}>Meet your<br/>people</h3>
        </TaglineTile>
        <TaglineTile color="white" width="half">
          <h3 style={{color: "black"}}>No more<br/>🤯<br/>because of<br/>💶</h3>
        </TaglineTile>
      </div>
      <div className="tilerow">
        <TaglineTile color="black" width="full"/>
      </div>
      <div className="tilerow">
        <TaglineTile color="white" width="half">
          <h3 style={{color: "black"}}>🗓️<br/>never miss a<br/>party</h3>
        </TaglineTile>
        <TaglineTile color="lavender" width="half">
          <h3 style={{color: "white"}}>Discover<br/>great<br/>places to<br/>live</h3>
        </TaglineTile>
      </div>
    </div>
  )
}

export default Taglines;
