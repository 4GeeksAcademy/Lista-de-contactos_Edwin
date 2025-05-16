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