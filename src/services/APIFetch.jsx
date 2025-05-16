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
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw error;
  }
}
