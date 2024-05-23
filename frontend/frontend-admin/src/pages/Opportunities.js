import React from "react";
import { useContext } from "react";
import { ListingContext } from "../App";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import usePagination from "../util/usePagination";

function Opportunities() {
  const { opportunities } = useContext(ListingContext);

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
}

export default Opportunities;
