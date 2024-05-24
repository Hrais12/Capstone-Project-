import Modal from "react-modal";
import { useState } from "react";
import { useContext } from "react";
import { ListingContext } from "../App";
import { Link } from "react-router-dom";

import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";

import usePagination from "../util/usePagination";
import AddClient from "../components/Addclient";
import UpdateClient from "../components/UpdateClient";

function Clients() {
  const { clients, setUpdateForm, setClients } = useContext(ListingContext);

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

  //   const [modal, setModal] = useState(false);
  //   const toggleModal = () => {
  //     setModal(!modal);
  //   };

  return (
    <>
      <Nav />
      <Sidebar />
      <div className="clients">
        <button className="addClient">Add</button>
        <AddClient />
        <UpdateClient />
        {/* <Modal
        isOpen={modal}
        onRequestClose={toggleModal}
        contentLabel="Add Contact"
        className="modal"
        overlayClassName="overlay"
      >
        <AddClient />
      </Modal> */}
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
                <button onClick={() => setUpdateForm({ ...client })}>
                  Edit
                </button>
                <button onClick={() => handleClick(client._id)}>Delete</button>
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
      const newContact = clients.filter((client) => client._id !== _id);
      setClients([...newContact]);
    } catch (error) {
      console.error(error);
    }
  }
}

export default Clients;
