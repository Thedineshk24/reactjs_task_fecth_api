import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import axios from "axios";

const URL = "https://fir-dynamiclinks-e43dd.web.app/practical-api.json";

const List = () => {
  const [services, setPurchasedServices] = useState({});
  const fetchDetails = async () => {
    // destructuring data directorly so we dont have to use response every time
    const { data } = await axios.get(URL);
    // console.log("DATA" , data.data.purchased_services);

    // updating state
    let details = data.data.purchased_services; // TODO: fix bug here 
    setPurchasedServices(details);

    console.log(services); // TODO: NOW I CAN FETCH API AND LOG IT IN CONSOLE
  };

  useEffect( () => {
     fetchDetails();
  },[services]);

  return (
    <Container>
      <ListGroup>
      {/* TODO: BELOW RENDRING IS NOT WORKING MAYBE BECAUSE OF ==> let details = data.data.purchased_services */}
        {services.purchased_office_template?.purchased_office_services
          ?.service_selected ? (
          <ListGroupItem>
            {
              <img
                height="100px"
                width="100px"
                src={services.purchased_office_template?.purchased_office_services?.image}
                alt="some images"
              />
            }
          </ListGroupItem>
        ) : (
          <ListGroupItem>{services.purchased_services?.name}</ListGroupItem>
        )}
      </ListGroup>
    </Container>
  );
};

export default List;
