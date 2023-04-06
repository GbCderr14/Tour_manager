import {useNavigate } from 'react-router-dom';
import useInput from "../hooks/use-input";
const New = (props) => {
  const navigate = useNavigate();
  const {
    value: name,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value:duration,
    isValid: enteredDurationIsValid,
    hasError: durationInputHasError,
    valueChangeHandler: durationChangeHandler,
    inputBlurHandler: durationBlurHandler,
    reset: resetDuration,
  } = useInput((value) => value.trim() !== "");

  const {
    value: no_of_people,
    isValid: enteredNoOfPeopleIsValid,
    hasError: noOfPeopleInputHasError,
    valueChangeHandler: noOfPeopleChangeHandler,
    inputBlurHandler: noOfPeopleBlurHandler,
    reset: resetNoOfPeople,
  } = useInput((value) => value.trim() !== "");

  const {
    value: city,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput((value) => value.trim() !== "");

  const {
    value: state,
    isValid: enteredStateIsValid,

    hasError: stateInputHasError,
    valueChangeHandler: stateChangeHandler,
    inputBlurHandler: stateBlurHandler,
    reset: resetState,
  } = useInput((value) => value.trim() !== "");

  const {
    value: hotel,
    isValid: enteredHotelIsValid,
    hasError: hotelInputHasError,
    valueChangeHandler: hotelChangeHandler,
    inputBlurHandler: hotelBlurHandler,
    reset: resetHotel,
  } = useInput((value) => value.trim() !== "");

  const {
    value: restaurant,
    isValid: enteredRestaurantIsValid,
    hasError: restaurantInputHasError,
    valueChangeHandler: restaurantChangeHandler,

    inputBlurHandler: restaurantBlurHandler,
    reset: resetRestaurant,
  } = useInput((value) => value.trim() !== "");



  let formIsValid = false;
  if (
    enteredNameIsValid &&
    enteredDurationIsValid &&
    enteredNoOfPeopleIsValid &&
    enteredCityIsValid &&
    enteredStateIsValid &&
    enteredHotelIsValid &&
    enteredRestaurantIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      alert("Kindly Fill all the Form fields...");
      return;
    }

    const tourData = {
      name: name,
      duration: duration,
      noOfPeople: no_of_people,
      city: city,
      state: state,
      hotel: hotel,
      restaurant: restaurant,
    };
    fetch("http://localhost:5000/api/v1/packages", {
      method: "POST",
      body: JSON.stringify(tourData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
    
        console.log(tourData);
        resetName();
        resetDuration();
        resetNoOfPeople();
        resetCity();
        resetState();
        resetHotel();
        resetRestaurant();
        navigate('/user-detail');
  };
  const nameInputClasses = nameInputHasError
  ? "invalid"
  : "";
  
  const durationInputClasses = durationInputHasError
  ? "invalid"
  : "";

  const noOfPeopleInputClasses = noOfPeopleInputHasError
  ? "invalid"
  : "";

  const cityInputClasses = cityInputHasError
  ? "invalid"
  : "";

  const stateInputClasses = stateInputHasError
  ? "invalid"
  : "";

  const hotelInputClasses = hotelInputHasError
  ? "invalid"
  : "";

  const restaurantInputClasses = restaurantInputHasError
  ? "invalid"
  : "";

    return <div className="login-box">
    <p>Tour Managing</p>
    <form onSubmit={formSubmissionHandler}>
      <div className="user-box">
        <input type="text" onChange={nameChangeHandler} onBlur={nameBlurHandler}  value={name} className={nameInputClasses}/>
        {!nameInputHasError? null : <p style={{color:"red", marginTop:"-15px" ,marginBottom:"20px",fontSize:"0.8rem"}}>First Name must not be empty</p>}
        <label>Name</label>
      </div>
      <div className="user-box">
        <input type="text" onChange={durationChangeHandler} onBlur={durationBlurHandler} value={duration} className={durationInputClasses}/>
        {!durationInputHasError? null : <p style={{color:"red", marginTop:"-15px" ,marginBottom:"20px",fontSize:"0.8rem"}}>Duration must not be empty</p>}
        <label>Duration</label>
      </div>
      <div className="user-box">
        <input type="text" onChange={noOfPeopleChangeHandler} onBlur={noOfPeopleBlurHandler} value={no_of_people} className={noOfPeopleInputClasses}/>
        {!noOfPeopleInputHasError? null : <p style={{color:"red", marginTop:"-15px" ,marginBottom:"20px",fontSize:"0.8rem"}}>No of People must not be empty</p>}
        <label>No of People</label>
      </div>
      <div className="place">
      <div className="user-box item1">
        <input required="" name="" type="text" onChange={cityChangeHandler} onBlur={cityBlurHandler} value={city} className={cityInputClasses}/>
        {!cityInputHasError? null : <p style={{color:"red", marginTop:"-15px" ,marginBottom:"20px",fontSize:"0.8rem"}}>City must not be empty</p>}
        <label>City</label>
      </div>
      <div className="user-box item2">
        <input required="" name="" type="text" onChange={stateChangeHandler} onBlur={stateBlurHandler} value={state} className={stateInputClasses}/>
        {!stateInputHasError? null : <p style={{color:"red", marginTop:"-15px" ,marginBottom:"20px",fontSize:"0.8rem"}}>State must not be empty</p>}
        <label >State</label>  
      </div>
      </div>
      <div className="user-box">
        <input required="" name="" type="text" onChange={hotelChangeHandler} onBlur={hotelBlurHandler} value={hotel} className={hotelInputClasses}/>
        {!hotelInputHasError? null : <p style={{color:"red", marginTop:"-15px" ,marginBottom:"20px",fontSize:"0.8rem"}}>Hotel must not be empty</p>}
        <label>Hotel</label>
      </div>
      <div className="user-box">
        <input required="" name="" type="text" onChange={restaurantChangeHandler} onBlur={restaurantBlurHandler} value={restaurant} className={restaurantInputClasses}/>
        {!restaurantInputHasError? null : <p style={{color:"red", marginTop:"-15px" ,marginBottom:"20px",fontSize:"0.8rem"}}>Restaurant must not be empty</p>}
        <label >Restaurant</label>
      </div>
      
      <button>
        <span />
        <span />
        <span />
        <span />
        Submit
      </button>
    </form>
  </div>
}

export default New;