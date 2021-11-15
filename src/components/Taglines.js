import hands from "./../hands.svg"
import clouds from "./../clouds.svg"
import lofftPeople from "./../lofftPeople.svg"
import Button from "./Button";

const tagBottom = {position: "absolute", bottom: 30, paddingBottom: "1rem" , left: 0, right: 0}

const Taglines = () => {
  return (
    <div className="taglines">

      <div className="tilerow">
        <div className="tagline tile-half tile-lavender" style={{backgroundImage: `url(${hands})`}}>
          <h3 style={{color: "white"}}>Meet your<br/>people</h3>
          <Button style={{margin: "0 auto", ...tagBottom}} color="white">Tell me how!</Button>
        </div>
        <div className="tagline tile-half tile-white">
          <h3 style={{color: "black"}}>No more<br/>🤯<br/>because of<br/>💶</h3>
          <Button style={{margin: "0 auto", ...tagBottom}} color="lavender">What do you mean?</Button>
       </div>
      </div>

      <div className="tilerow">
        <div className="tagline tile-full tile-black" style={{display: "flex", backgroundImage: `url(${lofftPeople})`}}>
          <div style={{marginLeft: "auto", paddingRight: "10rem"}}>
            <h3 style={{color: "white"}}>Find the<br/>Lofft of<br/>your life</h3>
            <Button style={{margin: "0 auto"}} color="lavender">Tell me how!</Button>
          </div>
        </div>
      </div>

      <div className="tilerow">
        <div className="tagline tile-half tile-white" style={{position: "relative"}}>
          <h3 style={{color: "black"}}>🗓️<br/>Never miss a<br/>party</h3>
          <div style={{position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", padding: "0 2rem"}}>
            <h3 style={{margin: 0, fontSize: "6rem"}}>🎉</h3>
            <Button style={{margin: "0 auto", height: "1rem", ...tagBottom}} color="lavender">Tell me how!</Button>
            <h3 style={{margin: 0, fontSize: "6rem"}}>🎉</h3>
          </div>
        </div>
        <div className="tagline tile-half tile-lavender" style={{backgroundImage: `url(${clouds})`}}>
          <h3 style={{color: "white"}}>Discover<br/>great<br/>places to<br/>live</h3>
          <Button style={{margin: "0 auto", height: "1rem", ...tagBottom}} color="white">Tell me how!</Button>
        </div>
      </div>
    </div>
  )
}

export default Taglines;
