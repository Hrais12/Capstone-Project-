import { useContext } from "react";
import { ListingContext } from "../App";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import usePagination from "../util/usePagination";
import AddOpportunity from "../components/AddOpportunity";
import UpdateOpportunity from "../components/UpdateOpportunity";

function Opportunities() {
  const { opportunities, setUpdateOppForm, setOpportunity } =
    useContext(ListingContext);

  const itemsPerPage = 10;
  const {
    currentPage,
    totalPages,
    currentItems,
    pageNumber,
    changePage,
    nextPage,
    prevPage,
  } = usePagination(opportunities, itemsPerPage);

  return (
    <div className="opportunity">
      <button className="addClient">Add</button>
      <AddOpportunity />
      <UpdateOpportunity />
      <table className="table">
        <thead>
          <th>Name</th>
          <th>Address</th>
          <th>type</th>
          <th>Status</th>
          <th>Volume</th>
          <th>Commission</th>
          <th>Closing Date</th>
        </thead>
        <tbody>
          {currentItems.map((opportunity) => (
            <tr className="">
              <td className="">{opportunity.name}</td>
              <td className="">{opportunity.address}</td>
              <td className="">{opportunity.tag}</td>
              <td className="">{opportunity.status}</td>
              <td className="">$18000</td>
              <td className="">$1200</td>
              <td className="">{opportunity.closingDate}</td>
              <button onClick={() => setUpdateOppForm({ ...opportunity })}>
                Edit
              </button>
              <button onClick={() => handleClick(opportunity._id)}>
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>

      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <Link
              key="prevPage"
              to="#"
              className="page-link"
              onClick={prevPage}
            >
              Prev
            </Link>
          </li>

          {pageNumber.map((n, i) => (
            <li
              className={`page-item ${currentPage === n + 1 ? "active" : ""}`}
              key={i}
            >
              <Link
                key={i}
                to="#"
                className="page-link"
                onClick={() => changePage(n + 1)}
              >
                {n + 1}
              </Link>
            </li>
          ))}

          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <Link
              key="nextPage"
              to="#"
              className="page-link"
              onClick={nextPage}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
  async function handleClick(_id) {
    try {
      await fetch(`http://localhost:3000/opportunity/${_id}`, {
        method: "DELETE",
      });
      const newOpportunity = opportunities.filter(
        (opportunity) => opportunity._id !== _id
      );
      setOpportunity([...newOpportunity]);
    } catch (error) {
      console.error(error);
    }
  }
}

export default Opportunities;
