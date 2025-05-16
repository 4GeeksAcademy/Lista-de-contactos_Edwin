export async function addContact(agenda, contact) {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/contact/agendas/${agenda}/contacts`,
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteContact(agenda, contactID) {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/contact/agendas/${agenda}/contacts/${contactID}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function downloadContact(agenda) {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/contact/agendas/${agenda}/contacts`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateContact(agenda, contact) {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/contact/agendas/${agenda}/contacts/${contact.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contact.name,
          phone: contact.phone,
          email: contact.email,
          address: contact.address,
        }),
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function createContactList(agenda) {
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
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
