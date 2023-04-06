const Card = (props) => {
    // <div className="form">
    return <li>
    <div className="user-box">
      {/* <input required="" name="" type="text" /> */}
      <label style={{fontSize:"1rem",position:"relative"}}>Name</label>
      <p style={{fontSize:"1rem",color:"red",textAlign:"left"}}>{props.name}</p>
    </div>
    <div className="user-box" >
      <label style={{position:"relative"}}>Duration</label>
      <p style={{fontSize:"1rem",color:"red",textAlign:"left"}}>{props.duration}</p>
    </div>
    <div className="user-box" >
      <label style={{position:"relative"}}>No. of people</label>
      <p style={{fontSize:"1rem",color:"red",textAlign:"left"}}>{props.nop}</p>
    </div>
    <div className="place">
    <div className="user-box item1" >
      <label style={{position:"relative"}}>City</label>
      <p style={{fontSize:"1rem",color:"red",textAlign:"left"}}>{props.city}</p>
    </div>
    <div className="user-box item2" >
      <label style={{paddingLeft:"5%",position:"relative"}}>State</label>
      <p style={{paddingLeft:"5%",fontSize:"1rem",color:"red",textAlign:"left"}}>{props.state}</p>
    </div>
    </div>
    <div className="user-box" >
      <label style={{position:"relative"}}>Hotel</label>
      <p style={{fontSize:"1rem",color:"red",textAlign:"left"}}>{props.hotel}</p>
    </div>
    <div className="user-box" >
      <label style={{position:"relative"}}>Restaurant</label>
      <p style={{fontSize:"1rem",color:"red",textAlign:"left"}}>{props.restaurant}</p>
    </div></li>
    // </div>
  }
  
  export default Card;