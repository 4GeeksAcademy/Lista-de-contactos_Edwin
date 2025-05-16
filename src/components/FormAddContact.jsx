import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { addContact } from "../services/APIFetch";

export const FormAddContact = () => {
  const { dispatch } = useGlobalReducer();
  const agenda = "agenda2";
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });    
    setMessage("");
  };

  const handleSubmit = async () => {
    const newInput = {
      ...form,
    };

    try {
      const response = await addContact(agenda, newInput);

      if (response.ok) {
        setMessage("Contact added.");
      } else {
        console.error("Error al agregar el contacto:", response.statusText);
        setMessage("Error adding contact.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setMessage("Error adding contact.");
    }

    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div>
      {message && <div className="alert alert-info">{message}</div>}
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter full name"
          value={form.name}
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
          type="text"
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
          name="address"
          className="form-control"
          placeholder="Enter address"
          value={form.address}
          onChange={handleChange}
        ></input>
      </div>
      <div className="mb-3">
        <button
          type="button"
          className="btn btn-success w-100"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};
