import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const FormAddContact = () => {
  const { dispatch } = useGlobalReducer();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };


  const handleSubmit = () => {
    const newContact = {
      ...form,
      id: Date.now(), 
      phone: Number(form.phone)
    };

    dispatch({ type: "add_contact", payload: newContact });

     setForm({
      fullName: "",
      email: "",
      phone: "",
      location: ""
    });
  };

  return (
    <div>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          className="form-control"
          placeholder="Enter full name"
          value={form.fullName}
          onChange={handleChange}
        ></input>
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">
          Email
        </label>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
        ></input>
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">
          Phone
        </label>
        <input
          type="number"
          name="phone"
          className="form-control"
          placeholder="Enter phone number"
          value={form.phone}
          onChange={handleChange}
        ></input>
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">
          Address
        </label>
        <input
          type="text"
          name="location"
          className="form-control"
          placeholder="Enter address"
          value={form.location}
          onChange={handleChange}
        ></input>
      </div>
      <div className="mb-3">
        <button type="button" class="btn btn-success w-100" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};
