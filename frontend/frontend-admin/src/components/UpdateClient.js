import { useContext } from "react";
import { ListingContext } from "../App";

function UpdateClient() {
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
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="formAdmin">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={updateForm.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={updateForm.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={updateForm.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tag"
          placeholder="Tag"
          value={updateForm.tag}
          onChange={handleChange}
        />

        <br />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default UpdateClient;
