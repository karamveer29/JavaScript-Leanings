// const url = 'https://api.chucknorris.io/jokes/random';
// const jokeText = document.getElementById('joke');
//     const jokeBtn = document.getElementById('getJoke');

//     async function getJoke() {
//       jokeText.innerText = "Loading joke...";
//       const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
//       const data = await response.json();
//       jokeText.innerText = data.joke;
//     }

//     jokeBtn.addEventListener('click', getJoke);

// handle this end point with XMLHttpRequest

const jokeText = document.getElementById('display-joke');
const jokeBtn = document.getElementById('getJoke');

async function getJoke() {
  jokeText.innerText = "Loading joke...";
  const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
  const data = await response.json();
  jokeText.innerText = data.joke;
}

jokeBtn.addEventListener('click', getJoke);

