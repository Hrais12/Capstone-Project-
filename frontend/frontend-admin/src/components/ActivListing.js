import React from "react";

import { useContext } from "react";
import { ListingContext } from "../App";

function ActivListing() {
  const { opportunities } = useContext(ListingContext);

  return (
    <div className="activListing">
      <h4>Active Listing</h4>

      <div className="dataTitle">
        <h5>Address</h5>
        <h5>Price</h5>
        <h5>Status</h5>
        <h5>Expiration date</h5>
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
