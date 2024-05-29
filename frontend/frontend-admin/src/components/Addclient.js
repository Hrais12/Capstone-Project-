import React, { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import axios from "axios";
import { useContext } from "react";
import { ListingContext } from "../App";
function AddClient({ close }) {
  const { clients, setClients } = useContext(ListingContext);

  // State to manage add new client form
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
    setClients(() => [...clients, res.data.client]);
    // This adds the new contact to the rest of existing contacts in db.
    setAddClient({
      name: "",
      phone: "",
      email: "",
      tag: "",
    });
    // to reset the form
    close(); //close form after submit
  };

  return (
    <div className="formAdmin">
      <div className="title">
        {" "}
        <h5> Client Contact Info</h5>
        <button onClick={close}>
          <RiCloseLargeFill />
        </button>
      </div>
      <hr></hr>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-input">
          Client's name
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={addClient.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Client's phone number
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={addClient.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Client's email
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={addClient.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Client's tag
          <input
            type="text"
            name="tag"
            placeholder="Tag"
            value={addClient.tag}
            onChange={handleChange}
          />
        </div>

        <br />
        <div className="creat-btn-container">
          <button type="submit" className="create-btn">
            Save
          </button>
          <button onClick={close} className="create-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddClient;
