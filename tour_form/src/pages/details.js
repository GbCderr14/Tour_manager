import { useState} from "react";
import Card from "../components/Card";
import List from "../components/List";
const Detail = (props) => {
  const [fetched, setIsFetched] = useState(false);
  const [showlist,setshowList]=useState(false);
  const [list,setList]=useState([]);

  const [name,setName]=useState("");
  const [duration,setDuration]=useState("");
  const [nop,setnop]=useState("");
  const [city,setCity]=useState("");
  const [state,setState]=useState("");
  const [hotel,setHotel]=useState("");
  const [restaurant,setRestaurant]=useState("");
  const allClickHandler=async()=>{
    const response = await fetch(
      "http://localhost:5000/api/v1/packages"
    );
    const data = await response.json();
    const data2=data.data;
    setList(data2);
    console.log(data2);
    console.log(list);
    setshowList(true);
  }
  const clickHandler = async () => {

    const response = await fetch(
      "http://localhost:5000/api/v1/packages"
    );
    const data = await response.json();
    const data2=data.data;
    console.log(data2[data2.length-1].name);
    setName(data2[data2.length-1].name);
    console.log(name);
    setDuration(data2[data2.length-1].duration);
    setnop(data2[data2.length-1].noOfPeople);
    setCity(data2[data2.length-1].place.city);
    setState(data2[data2.length-1].place.state);
    setHotel(data2[data2.length-1].hotel.name);
    setRestaurant(data2[data2.length-1].restaurant.name);
    setIsFetched(true);
  };
  
  return  <>{!showlist?<div className="login-box">
  <p>Tour Managing</p>
  {fetched?<Card name={name} duration={duration} nop={nop} hotel={hotel} city={city} state={state} restaurant={restaurant} />:""}
    {!fetched?<div className="form"><button onClick={clickHandler}>
      <span />
      <span />
      <span />
      <span />
      View Last added Package
    </button></div>:<div className="form"><button onClick={allClickHandler}>
      <span />
      <span />
      <span />
      <span />
      View All added Packages Upto now
    </button></div>}
</div>:<List list={list}/>}</>
};
export default Detail;
