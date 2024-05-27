import "./App.css";
import React from "react";

import { useState, useEffect, createContext, useContext } from "react";
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

  const [rentedThisYear, setRentedThisYear] = useState([]);

  const [updateForm, setUpdateForm] = useState({
    _id: null,
    name: "",
    phone: "",
    email: "",
    tag: "",
  });

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

  const [loggedUser, setLoggedUser] = useState(null);
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

  // console.log(rentedThisYear);

  useEffect(() => {
    numProperties();
  }, [opportunities]);

  useEffect(() => {
    getClients(setClients);
  }, [clients]);

  useEffect(() => {
    getOpportunities(setOpportunities);
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
