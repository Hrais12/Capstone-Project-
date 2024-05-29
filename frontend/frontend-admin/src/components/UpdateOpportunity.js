import { useContext } from "react";
import { ListingContext } from "../App";
import { RiCloseLargeFill } from "react-icons/ri";

function UpdateOpportunity({ close }) {
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
      close(); //colse the form after submit
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="formAdmin">
      <div className="title">
        {" "}
        <h5>Update Opportunity</h5>
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
            value={updateOppForm.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          propperty address
          <input
            type="text"
            name="address"
            placeholder="address"
            value={updateOppForm.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Type
          <input
            type="text"
            name="tag"
            placeholder="type"
            value={updateOppForm.tag}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Status
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={updateOppForm.status}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Listing price
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={updateOppForm.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Estimated closing date
          <input
            type="date"
            name="closingDate"
            placeholder="Closind Date"
            value={updateOppForm.closingDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          Listing expiration date
          <input
            type="date"
            name="expiringDate"
            placeholder="Expiring Date"
            value={updateOppForm.expiringDate}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="creat-btn-container">
          <button type="submit" className="create-btn">
            Edit
          </button>
          <button onClick={close} className="create-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateOpportunity;
