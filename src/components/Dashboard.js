import React, { useState } from "react";
import "./Kennel.css";
import "./Layout.css";
import "./employees/Employees.css";
import "./locations/Locations.css";
import { LocationProvider } from "./locations/LocationProvider";
import LocationList from "./locations/LocationList";
import "./animal/Animal.css";
import { AnimalProvider } from "./animal/animalProvider";
import AnimalList from "./animal/AnimalList";
import "./customers/Customers.css";
import { CustomerProvider } from "./customers/customerProvider";
import CustomerList from "./customers/CustomerList";
import { EmployeeProvider } from "./employees/employeeProvider";
import EmployeeList from "./employees/EmployeeList";
import { SearchBar } from "./search/SearchBar";
import { SearchResults } from "./search/SearchResults";

export const Dashboard = () => {
  const [searchTerms, setTerms] = useState("");

  return (
    <div className="mainContainer">
      <AnimalProvider>
        <CustomerProvider>
          <EmployeeProvider>
            <LocationProvider>
              <div className="searchContainer">
                <SearchBar setTerms={setTerms} />
                <SearchResults searchTerms={searchTerms} />
              </div>
              <div className="dataContainer">
                <h2>Nashville Kennels</h2>
                <small>Loving care when you're not there.</small>
                <LocationList />
                <AnimalList />
                <CustomerList />
                <EmployeeList />
              </div>
            </LocationProvider>
          </EmployeeProvider>
        </CustomerProvider>
      </AnimalProvider>
    </div>
  );
};
