import { useContext } from "react";
import { ListingContext } from "../App";

function NumProperties() {
  const { rentedThisYear } = useContext(ListingContext);

  return (
    <div className="numProperties">
      <h2>Properties</h2>
      <div>{rentedThisYear}</div>
      <p>Rented this year</p>
    </div>
  );
}

export default NumProperties;
