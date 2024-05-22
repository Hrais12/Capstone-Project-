import React from "react";

import { useContext } from "react";
import { ListingContext } from "../App";

function Rented() {
  const { opportunities } = useContext(ListingContext);
  return (
    <div className="rented">
      <h2>Recently Rented</h2>
      <div className="dataTitle">
        <h3>Address</h3>
        <h3>Client name</h3>
        <h3>Price</h3>
        <h3>Date</h3>
      </div>
      {opportunities
        .filter((opportunity) => opportunity.status === "Rented")
        .map((opportunity) => (
          <div className="data">
            <div className="dataItem"> {opportunity.address}</div>
            <div className="dataItem">{opportunity.name}</div>
            <div className="dataItem"> ${opportunity.price}</div>
            <div className="dataItem">{opportunity.closingDate}</div>
          </div>
        ))}
    </div>
  );
}

export default Rented;
