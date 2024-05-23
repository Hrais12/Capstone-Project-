import { useContext } from "react";
import { ListingContext } from "../App";

function UpdateOpportunity() {
  const { updateOppForm, setUpdateOppForm } = useContext(ListingContext);

  function handleChange(event) {
    setUpdateOppForm({
      ...updateOppForm,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await fetch(`http://localhost:3000/opportunity/${updateOppForm._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateOppForm),
      });
      setUpdateOppForm({
        _id: null,
        name: "",
        address: "",
        status: "",
        tag: "",
        price: "",
        closingDate: "",
        expiringDate: "",
      });
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
          value={updateOppForm.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="address"
          value={updateOppForm.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tag"
          placeholder="type"
          value={updateOppForm.tag}
          onChange={handleChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={updateOppForm.status}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={updateOppForm.price}
          onChange={handleChange}
        />
        <input
          type="date"
          name="closingDate"
          placeholder="Closind Date"
          value={updateOppForm.closingDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="expiringDate"
          placeholder="Expiring Date"
          value={updateOppForm.expiringDate}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default UpdateOpportunity;
