import Card from "./Card";
const List = (props) => {
  console.log(props.list);
  const packageitems = props.list.map((packageitem) => {
    return (
      <div className="login-box login-box">
          <p>{packageitem.name}</p>
          <Card
            name={packageitem.name}
            duration={packageitem.duration}
            nop={packageitem.noOfPeople}
            hotel={packageitem.hotel.name}
            city={packageitem.place.city}
            state={packageitem.place.state}
            restaurant={packageitem.restaurant.name}
          />
      </div>
    );
  });

  return (
    <div>
      <ul>{packageitems}</ul>
    </div>
  );
};

export default List;
