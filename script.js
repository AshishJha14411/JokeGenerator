let jokeArea = document.querySelector("#joke");
const getJokeBtn = document.querySelector("#jokeBtn");
jokeArea.innerHTML= `Press 'Get Another Joke' button to get started`
getJokeBtn.addEventListener("click", async () => {
  let response = await fetch("https://v2.jokeapi.dev/joke/Dark");
  let data = await response.json();
  if (data.setup == "") {
    jokeArea.innerHTML = data.delivery;
  } else {
    jokeArea.innerHTML = data.setup;
    jokeArea.innerHTML += "\n" + data.delivery;
  }
  if (data.setup === undefined || data.delivery === undefined) {
    jokeArea.innerHTML =
      "There has been an error due to the lack of support for the api development, Kindly Contact the contributors at jokeapi.dev to help";
  }
});
