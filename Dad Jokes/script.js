const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

//Using this
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeElement.innerHTML = data.joke;
//     });
// }

//Using asynch/await
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com", config);
  const data = await response.json();
  jokeElement.innerHTML = data.joke;
}
