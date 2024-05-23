import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ListingContext } from "../App";
function AddOpportunity() {
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
    // to reset the form
  };

  return (
    <div className="formAdmin">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={addOpportunity.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="address"
          value={addOpportunity.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tag"
          placeholder="type"
          value={addOpportunity.tag}
          onChange={handleChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={addOpportunity.status}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={addOpportunity.price}
          onChange={handleChange}
        />
        <input
          type="date"
          name="closingDate"
          placeholder="Closind Date"
          value={addOpportunity.closingDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="expiringDate"
          placeholder="Expiring Date"
          value={addOpportunity.expiringDate}
          onChange={handleChange}
        />

        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddOpportunity;
