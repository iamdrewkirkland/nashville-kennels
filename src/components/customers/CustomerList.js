import React, { useContext } from "react";

import "./Customers.css";
import { CustomerContext } from "./customerProvider";
import Customer from "./Customer";

export default () => {
  const { customers } = useContext(CustomerContext);

  return (
    <>
      <h2>Customers</h2>
      <div className="customers">
        {customers.map((customer) => (
          <Customer key={customer.id} customer={customer} />
        ))}
      </div>
    </>
  );
};
