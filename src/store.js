

export const initialStore = () => {
  return contacts = [];
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

    case  'set_store':
      return  action.payload;
      
    default:
      throw Error("Unknown action.");
  }
}
