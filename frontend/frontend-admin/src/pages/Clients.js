import React from "react";
import { useContext } from "react";
import { ListingContext } from "../App";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import usePagination from "../util/usePagination";

function Clients() {
  const { clients } = useContext(ListingContext);

  const itemsPerPage = 10;
  const {
    currentPage,
    totalPages,
    currentItems,
    pageNumber,
    changePage,
    nextPage,
    prevPage,
  } = usePagination(clients, itemsPerPage);

  return (
    <div className="clients">
      <table className="table">
        <thead>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>type</th>
        </thead>
        <tbody>
          {currentItems.map((client) => (
            <tr className="">
              <td className="">{client.name}</td>
              <td className="">{client.phone}</td>
              <td className="">{client.email}</td>
              <td className="">{client.tag}</td>
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

export default Clients;
