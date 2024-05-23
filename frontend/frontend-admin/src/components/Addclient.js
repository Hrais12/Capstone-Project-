import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ListingContext } from "../App";
function AddClient() {
  const { clients, setClients } = useContext(ListingContext);

  const [addClient, setAddClient] = useState({
    name: "",
    phone: "",
    email: "",
    tag: "",
  });

  function handleChange(event) {
    setAddClient({
      ...addClient,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Create new cantact using post method
    const res = await axios.post("http://localhost:3000/client", addClient);
    console.log(res);
    // Axios Req -> POST (formData => {state})
    setClients(() => [...clients, res.client]);
    // This adds the new contact to the rest of existing contacts in db.
    setAddClient({
      name: "",
      phone: "",
      email: "",
      tag: "",
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
          value={addClient.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={addClient.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={addClient.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tag"
          placeholder="Tag"
          value={addClient.tag}
          onChange={handleChange}
        />

        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddClient;
