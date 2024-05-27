import React, { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import axios from "axios";
import { useContext } from "react";
import { ListingContext } from "../App";
function AddOpportunity({ close }) {
  const { opportunities, setOpportunities } = useContext(ListingContext);

  const [addOpportunity, setAddOpportunity] = useState({
    name: "",
    address: "",
    status: "",
    tag: "",
    price: "",
    closingDate: "",
    expiringDate: "",
  });

  function handleChange(event) {
    setAddOpportunity({
      ...addOpportunity,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Create new opportunity using post method
    const res = await axios.post(
      "http://localhost:3000/opportunity",
      addOpportunity
    );
    console.log(res);
    // Axios Req -> POST (formData => {state})
    setOpportunities(() => [...opportunities, res.data.opportunity]);
    // This adds the new opportunity to the rest of existing db.
    setAddOpportunity({
      name: "",
      address: "",
      status: "",
      tag: "",
      price: "",
      closingDate: "",
      expiringDate: "",
    });
    // to reset the form and close after submission
    close();
  };

  return (
    <div className="formAdmin">
      {" "}
      <div className="title">
        {" "}
        <h5>Create Opportunity</h5>
        <button onClick={close}>
          <RiCloseLargeFill />
        </button>
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-input">
          Client name
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={addOpportunity.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Property address
          <input
            type="text"
            name="address"
            placeholder="address"
            value={addOpportunity.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Type
          <input
            type="text"
            name="tag"
            placeholder="type"
            value={addOpportunity.tag}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Status
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={addOpportunity.status}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Listing price
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={addOpportunity.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Estimated closing date
          <input
            type="date"
            name="closingDate"
            placeholder="Closind Date"
            value={addOpportunity.closingDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Listing expiration date
          <input
            type="date"
            name="expiringDate"
            placeholder="Expiring Date"
            value={addOpportunity.expiringDate}
            onChange={handleChange}
          />
        </div>

        <br />
        <div className="creat-btn-container">
          <button type="submit" className="create-btn">
            Create
          </button>
          <button onClick={close} className="create-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddOpportunity;
