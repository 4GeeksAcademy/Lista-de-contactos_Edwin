import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const EditContactModal = ({ contact, onClose }) => {
  const { dispatch } = useGlobalReducer();
  const [form, setForm] = useState({ ...contact });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => { // volver asincrono
    // logica de edicion en el servidor
    dispatch({ type: "update_contact", payload: form });
    onClose();
  };

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <h5 className="modal-title mb-3">Edit Contact</h5>

          <input
            type="text"
            className="form-control mb-2"
            name="fullName"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <input
            type="email"
            className="form-control mb-2"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="number"
            className="form-control mb-2"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <input
            type="text"
            className="form-control mb-3"
            name="location"
            value={form.address}
            onChange={handleChange}
            placeholder="Location"
          />

          <div className="d-flex justify-content-end">
            <button className="btn btn-secondary me-2" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-success" onClick={handleSubmit}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
