import "./App.css";
import React from "react";

import { useState, useEffect, createContext } from "react";
import { getOpportunities } from "./util/opportunities-api";
import { getClients } from "./util/clients-api";

import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Opportunities from "./pages/Opportunities";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

export const ListingContext = createContext();

function App() {
  const [opportunities, setOpportunities] = useState([]);
  // console.log(opportunities);

  const [clients, setClients] = useState([]);

  // State to store opportunities rented this year
  const [rentedThisYear, setRentedThisYear] = useState([]);

  // State to manage the update form for clients:
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    name: "",
    phone: "",
    email: "",
    tag: "",
  });

  // State to manage the update form for opportunities:
  const [updateOppForm, setUpdateOppForm] = useState({
    _id: null,
    name: "",
    address: "",
    status: "",
    tag: "",
    price: "",
    closingDate: "",
    expiringDate: "",
  });

  // State to manage the logged in user information
  const [loggedUser, setLoggedUser] = useState(null);

  // console.log(rentedThisYear);

  useEffect(() => {
    //Calculate the number of properties rented this year
    const numProperties = () => {
      const currentYear = new Date().getFullYear();
      //   console.log(currentYear);
      const totalRented = opportunities.filter((opportunity) => {
        const closingDate = new Date(opportunity.closingDate);
        return (
          opportunity.status === "Rented" &&
          closingDate.getFullYear() === currentYear
        );
      });

      setRentedThisYear(totalRented);
    };
    numProperties();
  }, [opportunities]); //re-run effect when opportunities state changes

  useEffect(() => {
    getClients(setClients); // Fetch clients and update state
  }, [clients]);

  useEffect(() => {
    getOpportunities(setOpportunities); // Fetch opportunities and update state
  }, [opportunities]);

  return (
    <div className="App">
      <ListingContext.Provider
        value={{
          opportunities,
          setOpportunities,
          rentedThisYear,
          setRentedThisYear,
          clients,
          setClients,
          updateForm,
          setUpdateForm,
          updateOppForm,
          setUpdateOppForm,
          loggedUser,
          setLoggedUser,
        }}
      >
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/opportunities" element={<Opportunities />} />
        </Routes>
      </ListingContext.Provider>
    </div>
  );
}

export default App;
