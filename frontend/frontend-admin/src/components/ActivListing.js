import React from "react";

import { useContext } from "react";
import { ListingContext } from "../App";

function ActivListing() {
  const { opportunities } = useContext(ListingContext);

  return (
    <div className="activListing">
      <h2>Active Listing</h2>

      <div className="dataTitle">
        <h3>Address</h3>
        <h3>Price</h3>
        <h3>Status</h3>
        <h3>Expiration date</h3>
      </div>
      {opportunities
        .filter((opportunity) => opportunity.status === "Active")
        .map((opportunity) => (
          <div className="data">
            <div className="dataItem">{opportunity.address}</div>
            <div className="dataItem">${opportunity.price}</div>
            <div className="dataItem">{opportunity.status}</div>
            <div className="dataItem">{opportunity.expiringDate}</div>
          </div>
        ))}
    </div>
  );
}

export default ActivListing;
