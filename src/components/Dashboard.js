import React, { useState, useEffect } from "react";
import "./Kennel.css";
import "./Layout.css";
import "./employees/Employees.css";
import "./locations/Locations.css";
import { LocationProvider } from "./locations/LocationProvider";
import LocationList from "./locations/LocationList";
import "./animal/Animal.css";
import { AnimalProvider } from "./animal/animalProvider";
import "./customers/Customers.css";
import { CustomerProvider } from "./customers/customerProvider";
import CustomerList from "./customers/CustomerList";
import { EmployeeProvider } from "./employees/employeeProvider";
import EmployeeList from "./employees/EmployeeList";
import { SearchBar } from "./search/SearchBar";
import { SearchResults } from "./search/SearchResults";


export const Dashboard = () => {
  const [searchTerms, setTerms] = useState(null);
  const [activeList, setActiveList] = useState("locations");
  const [components, setComponents] = useState();

  // Components needed to display locations
  const showLocations = () => (
    <LocationProvider>
      <LocationList />
    </LocationProvider>
  );

  // Components needed to display customers
  const showCustomers = () => (
    <CustomerProvider>
      <CustomerList />
    </CustomerProvider>
  );

  // Components needed to display employee
  const showEmployees = () => (
    <EmployeeProvider>
      <LocationProvider>
        <EmployeeList />
      </LocationProvider>
    </EmployeeProvider>
  );

  /*
      This effect hook determines which list is shown
      based on the state of the `activeList` variable.
  */
  useEffect(() => {
    if (activeList === "customers") {
      setComponents(showCustomers);
    } else if (activeList === "locations") {
      setComponents(showLocations);
    } else if (activeList === "employees") {
      setComponents(showEmployees);
    }
  }, [activeList]);

  return (
    <div className="mainContainer">
      <div className="searchContainer">
        <AnimalProvider>
          <CustomerProvider>
            <LocationProvider>
              <SearchBar setTerms={setTerms} />
              <SearchResults searchTerms={searchTerms} />
            </LocationProvider>
          </CustomerProvider>
        </AnimalProvider>
      </div>
      <div className="dataContainer">
        <h1>Nashville Kennels</h1>
        <small>Loving care when you're not there.</small>
        <div className="listContainer">
          <div className="links">
            <div
              className="fakeLink href"
              onClick={() => setActiveList("locations")}
            >
              Locations
            </div>
            <div
              className="fakeLink href"
              onClick={() => setActiveList("customers")}
            >
              Customers
            </div>
            <div
              className="fakeLink href"
              onClick={() => setActiveList("employees")}
            >
              Employees
            </div>
          </div>
          <div className="listDisplay">{components}</div>
        </div>
      </div>
    </div>
  );
};
