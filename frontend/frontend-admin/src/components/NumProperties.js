import { useContext } from "react";
import { ListingContext } from "../App";

function NumProperties() {
  const { rentedThisYear } = useContext(ListingContext);
  //   console.log(rentedThisYear);
  return (
    <div className="numProperties">
      <h2>Properties</h2>
      <div>{rentedThisYear.length}</div>
      <p>Rented this year</p>
      <div className="total">
        Total Volume This Year: $
        {rentedThisYear.reduce(
          (total, opportunity) => total + opportunity.price * 12,
          0
        )}
      </div>
      <div className="total">
        Total Revenue this Year: $
        {rentedThisYear.reduce(
          (total, opportunity) => total + opportunity.price * 0.7,
          0
        )}
      </div>
    </div>
  );
}

export default NumProperties;
