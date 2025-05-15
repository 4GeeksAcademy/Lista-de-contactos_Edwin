export const initialStore = () => {
  return {
    message: null,
    contacts: [
      {
        id: 1,
        fullName: "Edwin Gonzalez",
        location: "Suba",
        phone: 3012305761,
        email: "esgo.edwin@gmail.com",
      },
      {
        id: 2,
        fullName: "Blanca Contreras",
        location: "Bosa",
        phone: 3212162556,
        email: "blcm1968@gmail.com",
      },
    ],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_contact":
      return {
        ...store,
        contacts: [...store.contacts, action.payload],
      };

    case "update_contact":
      return {
        ...store,
        contacts: store.contacts.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, ...action.payload }
            : contact
        ),
      };
    case "delete_contact":
      return {
        ...store,
        contacts: store.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      throw Error("Unknown action.");
  }
}
