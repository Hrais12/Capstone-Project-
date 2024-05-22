export async function getOpportunities(setState) {
  try {
    const response = await fetch("http://localhost:3000/opportunity");
    const data = await response.json();
    // console.log(data);
    setState(data.opportunity);
  } catch (error) {
    console.error(error);
  }
}
