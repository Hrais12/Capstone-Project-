import React from "react";

import { useContext } from "react";
import { ListingContext } from "../App";

function Rented() {
  const { opportunities } = useContext(ListingContext);
  return (
    <div className="rented">
      <h4>Recently Rented</h4>
      <div className="dataTitle">
        <h5>Address</h5>
        <h5>Client name</h5>
        <h5>Price</h5>
        <h5>Date</h5>
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
