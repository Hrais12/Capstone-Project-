import "./App.css";
import React from "react";

import { useState, useEffect, createContext, useContext } from "react";
import { getOpportunities } from "./util/opportunities-api";

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

  useEffect(() => {
    getOpportunities(setOpportunities);
  }, [opportunities]);

  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <ListingContext.Provider value={{ opportunities, setOpportunities }}>
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
