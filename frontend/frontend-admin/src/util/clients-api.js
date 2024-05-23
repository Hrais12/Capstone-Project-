export async function getClients(setState) {
  try {
    const response = await fetch("http://localhost:3000/client");
    const data = await response.json();
    // console.log(data);
    setState(data.client);
  } catch (error) {
    console.error(error);
  }
}
