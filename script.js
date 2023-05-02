const api = "https://api.quotable.io/random";

const button = document.querySelector("button");
const author = document.querySelector(".author");
const quote = document.querySelector(".quote");

button.addEventListener("click", () => {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      author.innerText = data.author;
      quote.innerText = data.content;
    })
    .catch(alert("Error fetching quote"));
});
