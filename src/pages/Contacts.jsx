import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Custom hook for accessing the global state.
import { ContactCard } from "../components/ContactCard";
import { useEffect, useState } from "react";
import { downloadContact } from "../services/APIFetch";

export const Contacts = () => {
  const agenda = "agenda2";
  const { store, dispatch } = useGlobalReducer();
  const [loading, setLoading] = useState(true);

  async function crearAgenda(agenda) {
    try {
      const response = await fetch(
        `https://playground.4geeks.com/contact/agendas/${agenda}`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Agenda creada:", data);
      } else {
        const errorData = await response.json();
        console.log("Ya existe la agenda:", errorData);
        downloadContact(agenda);
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  }

  useEffect(() => {
    crearAgenda(agenda);
    if (loading) {
      const fetchContacts = async () => {
        const contacts = await downloadContact(agenda);
        if (contacts) {
          dispatch({ type: "set_store", payload: contacts });
        }
        setLoading(false);
      };
      fetchContacts();
    }
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Contact List</h1>

      {store?.contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}

      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
