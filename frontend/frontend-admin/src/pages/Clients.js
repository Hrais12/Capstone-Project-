import { useState } from "react";
import { useContext } from "react";
import { ListingContext } from "../App";
import { Link } from "react-router-dom";

import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineMoreHoriz } from "react-icons/md";

import usePagination from "../util/usePagination";
import AddClient from "../components/Addclient";
import UpdateClient from "../components/UpdateClient";

function Clients() {
  const { clients, setUpdateForm, setClients } = useContext(ListingContext);

  // State to manage edit dropdown visibility
  const [openDropdown, setOpenDropdown] = useState(null);

  // State to manage visibility of the add new client form
  const [openAddBtn, setOpenAddBtn] = useState(false);

  // State to manage visibility of the update client info form
  const [showEditModal, setShowEditModal] = useState(false);

  const itemsPerPage = 10;
  const {
    currentPage,
    totalPages,
    currentItems,
    pageNumber,
    changePage,
    nextPage,
    prevPage,
  } = usePagination(clients, itemsPerPage); //custom pagination hook

  const style = {
    fontSize: "2em",
    cursor: "pointer",
  };

  return (
    <>
      <Nav />
      <Sidebar />
      <div className="clients">
        <button
          className="create-btn"
          onClick={() => setOpenAddBtn(!openAddBtn)}
        >
          + Add New Client
        </button>
        {openAddBtn && (
          <div className="modal-overlay">
            <div className="modal-content">
              <AddClient close={() => setOpenAddBtn(false)} />
            </div>
          </div>
        )}
        {showEditModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <UpdateClient close={() => setShowEditModal(false)} />
            </div>
          </div>
        )}

        <table className="table">
          <thead>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Type</th>
          </thead>
          <tbody>
            {currentItems.map((client, index) => (
              <tr className="">
                <td className="">{client.name}</td>
                <td className="">{client.phone}</td>
                <td className="">{client.email}</td>
                <td className="">{client.tag}</td>
                <td
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                >
                  <MdOutlineMoreHoriz style={style} />
                </td>
                {openDropdown === index && (
                  <div className="client-dropdown">
                    <ul>
                      <li>
                        <button
                          className="edit"
                          onClick={() => {
                            setUpdateForm({ ...client });
                            setShowEditModal(true);
                          }}
                        >
                          Update
                        </button>
                      </li>
                      <li>
                        <button
                          className="delete"
                          onClick={() => handleClick(client._id)}
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
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
    </>
  );

  async function handleClick(_id) {
    try {
      await fetch(`http://localhost:3000/client/${_id}`, {
        method: "DELETE",
      });
      // Update the clients state after deletion
      const newContact = clients.filter((client) => client._id !== _id);
      setClients([...newContact]);
    } catch (error) {
      console.error(error);
    }
  }
}

export default Clients;
