import { useContext } from "react";
import { ListingContext } from "../App";
import { RiCloseLargeFill } from "react-icons/ri";

function UpdateClient({ close }) {
  const { updateForm, setUpdateForm } = useContext(ListingContext);

  function handleChange(event) {
    setUpdateForm({
      ...updateForm,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await fetch(`http://localhost:3000/client/${updateForm._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateForm),
      });
      setUpdateForm({ _id: null, name: "", phone: "", email: "", tag: "" });
      close();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="formAdmin">
      <div className="title">
        {" "}
        <h5>Update Client's Contact Info</h5>
        <button onClick={close}>
          <RiCloseLargeFill />
        </button>
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-input">
          Client's name
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={updateForm.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Client's phone number
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={updateForm.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Client's email
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={updateForm.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Client's tag
          <input
            type="text"
            name="tag"
            placeholder="Tag"
            value={updateForm.tag}
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

export default UpdateClient;
