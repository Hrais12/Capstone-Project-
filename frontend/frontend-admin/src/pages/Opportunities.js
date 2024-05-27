import { useContext, useState } from "react";
import { ListingContext } from "../App";
import { Link } from "react-router-dom";

import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineMoreHoriz } from "react-icons/md";

import usePagination from "../util/usePagination";
import AddOpportunity from "../components/AddOpportunity";
import UpdateOpportunity from "../components/UpdateOpportunity";

function Opportunities() {
  const { opportunities, setUpdateOppForm, setOpportunity } =
    useContext(ListingContext);
  const [openAddBtn, setOpenAddBtn] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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

  const style = {
    fontSize: "2em",
    cursor: "pointer",
  };
  return (
    <>
      <Nav />
      <Sidebar />
      <div className="opportunity">
        <button
          className="create-btn"
          onClick={() => setOpenAddBtn(!openAddBtn)}
        >
          + Add Opportunity
        </button>
        {openAddBtn && (
          <div className="modal-overlay">
            <div className="modal-content">
              <AddOpportunity close={() => setOpenAddBtn(false)} />
            </div>
          </div>
        )}
        {showEditModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <UpdateOpportunity close={() => setShowEditModal(false)} />
            </div>
          </div>
        )}
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
            {currentItems.map((opportunity, index) => (
              <tr className="" key={opportunity._id}>
                <td className="">{opportunity.name}</td>
                <td className="">{opportunity.address}</td>
                <td className="">{opportunity.tag}</td>
                <td className="">{opportunity.status}</td>
                <td className="">${opportunity.price * 12}</td>
                <td className="">
                  ${parseFloat(opportunity.price * 0.7).toFixed(2)}
                </td>
                <td className="">{opportunity.closingDate}</td>
                <td
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                >
                  <MdOutlineMoreHoriz style={style} />
                </td>
                {openDropdown === index && (
                  <div className="dropdown">
                    <ul>
                      <li>
                        {" "}
                        <button
                          className="edit"
                          onClick={() => {
                            setUpdateOppForm({ ...opportunity });
                            setShowEditModal(true);
                          }}
                        >
                          Edit
                        </button>
                      </li>
                      <li>
                        <button
                          className="delete"
                          onClick={() => handleClick(opportunity._id)}
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
