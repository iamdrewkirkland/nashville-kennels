import React, { useContext } from "react";

import "./Animal.css";
import { AnimalContext } from "./animalProvider";
import Animal from "./Animal";
import { LocationContext } from "../locations/LocationProvider";
import { CustomerContext } from "../customers/customerProvider";

export default () => {
  const { animals } = useContext(AnimalContext);
  const { locations } = useContext(LocationContext);
  const { customers } = useContext(CustomerContext);

  return (
    <div className="animals">
      {animals.map((ani) => {
        const matchingLocation = locations.find(
          (loc) => loc.id === ani.locationId
        );
        const matchingCustomer = customers.find(
          (customer) => customer.id === ani.customerId
        );

        return (
          <Animal
            key={ani.id}
            animal={ani}
            customer={matchingCustomer}
            location={matchingLocation}
          />
        );
      })}
    </div>
  );
};
