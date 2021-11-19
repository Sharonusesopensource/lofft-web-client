import Button from "./Button";

const tagBottom = {position: "absolute", bottom: 30, paddingBottom: "1rem" , left: 0, right: 0}

const Taglines = ({setModal}) => {
  return (
    <div className="taglines">

      <div className="tilerow">
        <div className="tagline tile-half tile-lavender" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/illustrations/hands.svg'})`}}>
          <h3 style={{color: "white"}}>Meet your<br/>people</h3>
          <Button style={{margin: "0 auto", ...tagBottom}} color="white" onClick={()=> setModal({type: "tag", "key": "meetYourPeople"})}>Tell me how!</Button>
        </div>
        <div className="tagline tile-half tile-white">
          <h3 style={{color: "black"}}>No more<br/>🤯<br/>because of<br/>💶</h3>
          <Button style={{margin: "0 auto", ...tagBottom}} color="lavender" onClick={()=> setModal({type: "tag", "key": "noMoreHeadaches"})}>What do you mean?</Button>
       </div>
      </div>

      <div className="tilerow">
        <div className="tagline tile-full tile-black" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/illustrations/lofftPeople.svg'})`}}>
          <div className="tag-right">
            <h3 style={{color: "white"}}>Find the<br/>Lofft of<br/>your life</h3>
            <Button style={{margin: "0 auto", ...tagBottom}} color="lavender" onClick={()=> setModal({type: "tag", "key": "findTheLofftOfYourLife"})}>Tell me how!</Button>
          </div>
        </div>
      </div>

      <div className="tilerow">
        <div className="tagline tile-half tile-white" style={{position: "relative"}}>
          <h3 style={{color: "black"}}>🗓️<br/>Never miss a<br/>party</h3>
          <div style={{position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", padding: "0 2rem"}}>
            <h3 style={{margin: 0, fontSize: "4rem"}}>🎉</h3>
            <Button style={{margin: "0 auto", height: "1rem", ...tagBottom}} color="lavender" onClick={()=> setModal({type: "tag", "key": "neverMissAParty"})}>How?</Button>
            <h3 className="vflip" style={{margin: 0, fontSize: "4rem"}}>🎉</h3>
          </div>
        </div>
        <div className="tagline tile-half tile-lavender" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/illustrations/clouds.svg'})`}}>
          <h3 style={{color: "white"}}>Discover<br/>great<br/>places to<br/>live</h3>
          <Button style={{margin: "0 auto", height: "1rem", ...tagBottom}} color="white" onClick={()=> setModal({type: "tag", "key": "discoverGreatPlacesToLive"})}>Tell me how!</Button>
        </div>
      </div>
    </div>
  )
}

export default Taglines;
