import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const FormAddContact = () => {
  const { dispatch } = useGlobalReducer();
  const [newContact, setNewContact] = useState("");
  const agenda = "agenda2";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    const newInput = {
      ...form,
    };

    try {
      const response = await fetch(
        `https://playground.4geeks.com/contact/agendas/${agenda}/contacts`,
        {
          method: "POST",
          body: JSON.stringify(newInput),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Contacto agregado:", data);
      } else {
        console.error("Error al agregar el contacto:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }

/*     setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
    }); */
  };

  return (
    <div>
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
