import { useContext } from "react";
import { ListingContext } from "../App";

function NumProperties() {
  const { rentedThisYear } = useContext(ListingContext);
  //   console.log(rentedThisYear);
  return (
    <div className="numProperties">
      <h4>Annual Rental Property Performance</h4>

      <div className="total-performance">
        <div>
          <div className="subtitle">Total Rented Properties</div>{" "}
          <div className="total-rented ">{rentedThisYear.length}</div>
        </div>
        <div className="vertical-rul"></div>
        <div className="volume">
          <div className="total-volume">
            $
            {rentedThisYear.reduce(
              (total, opportunity) => total + opportunity.price * 12,
              0
            )}
          </div>
          <div className="subtitle">Total Volume </div>
        </div>
        <div className="vertical-rul"></div>
        <div className="revenue">
          <div className="total-revenue">
            $
            {rentedThisYear.reduce(
              (total, opportunity) => total + opportunity.price * 0.7,
              0
            )}
          </div>{" "}
          <div className="subtitle">Total Revenue </div>
        </div>
      </div>
    </div>
  );
}

export default NumProperties;
