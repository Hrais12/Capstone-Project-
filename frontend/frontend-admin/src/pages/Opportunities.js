import { useContext, useState } from "react";
import { ListingContext } from "../App";
import { IoIosSearch } from "react-icons/io";

import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineMoreHoriz } from "react-icons/md";

import AddOpportunity from "../components/AddOpportunity";
import UpdateOpportunity from "../components/UpdateOpportunity";

function Opportunities() {
  const { opportunities, setUpdateOppForm, setOpportunity } =
    useContext(ListingContext);
  const [openAddBtn, setOpenAddBtn] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // State to manage sesarch input
  const [search, setSearch] = useState("");

  const style = {
    fontSize: "2em",
    cursor: "pointer",
  };

  // search icon styling
  const magnifire = {
    position: "absolute",
    left: "20.5em",
    fontSize: "1.4em",
    color: "grey",
    top: "100px",
  };

  // Filter the clients array to check if the opportunity's name,address,staus,or tag includes the search term
  const results = opportunities.filter(
    (opportunity) =>
      opportunity.name.toLowerCase().includes(search.toLowerCase()) ||
      opportunity.address.includes(search) ||
      opportunity.status.toLowerCase().includes(search.toLowerCase()) ||
      opportunity.tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Nav />
      <Sidebar />
      <div className="opportunity">
        <div className="search-container">
          <input
            type="search"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <IoIosSearch style={magnifire} />
          <button
            className="create-btn"
            onClick={() => setOpenAddBtn(!openAddBtn)}
          >
            + Add Opportunity
          </button>
        </div>
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
            <th>Type</th>
            <th>Status</th>
            <th>Volume</th>
            <th>Commission</th>
            <th>Closing Date</th>
          </thead>
          <tbody>
            {results.map((opportunity, index) => (
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
                          Update
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
