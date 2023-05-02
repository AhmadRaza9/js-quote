const api = "https://api.quotable.io/random";

const button = document.querySelector("button");
const author = document.querySelector(".author");
const quote = document.querySelector(".quote");

 

// OLD CODE

// button.addEventListener("click", async () => {
//   await fetch(api)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       author.innerText = data.author;
//       quote.innerText = data.content;
//     })
//     .catch(alert("Error fetching quote"));
// });

// OLD CODE

async function getData() {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    author.innerText = data.author;
    quote.innerText = data.content;
  } catch (error) {
    console.error("Error:", error);
    alert("Error fetching quote!");
  }
}

button.addEventListener("click", getData);
