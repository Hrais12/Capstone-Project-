import "./App.css";
import React from "react";

import { useState, useEffect, createContext, useContext } from "react";
import { getOpportunities } from "./util/opportunities-api";
import { getClients } from "./util/clients-api";

import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Opportunities from "./pages/Opportunities";

export const ListingContext = createContext();

function App() {
  const [opportunities, setOpportunities] = useState([]);
  // console.log(opportunities);

  const [clients, setClients] = useState([]);

  const [rentedThisYear, setRentedThisYear] = useState(0);

  const numProperties = () => {
    const currentYear = new Date().getFullYear();
    //   console.log(currentYear);
    const totalRented = opportunities.filter((opportunity) => {
      const closingDate = new Date(opportunity.closingDate);
      return (
        opportunity.status === "Rented" &&
        closingDate.getFullYear() === currentYear
      );
    }).length;

    setRentedThisYear(totalRented);
  };

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
      <Nav />
      <Sidebar />
      <ListingContext.Provider
        value={{
          opportunities,
          setOpportunities,
          rentedThisYear,
          setRentedThisYear,
          clients,
          setClients,
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/opportunities" element={<Opportunities />} />
        </Routes>
      </ListingContext.Provider>
    </div>
  );
}

export default App;
