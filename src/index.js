import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
const outputes = document.getElementById("data");
async function callapi() {
  let result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let resultS = await result.json();
  console.warn(resultS);

  outputes.innerHTML = `<p>Todo Title: ${resultS.title}</p>`;
  outputes.innerHTML = `<p>Todo Title: ${resultS.completed}</p>`;
}
callapi();
