// ---------- TEXT FORMATTER ----------
const textInput = document.getElementById('text-input');
const textOutput = document.getElementById('text-output');

const btnUpper = document.getElementById('upper');
const btnLower = document.getElementById('lower');
const btnCap = document.getElementById('capitalize');
const btnBold = document.getElementById('bold');
const btnItalic = document.getElementById('italic');
const btnUnderline = document.getElementById('underline');

// Text Transformation Buttons
btnUpper.addEventListener('click', () => textOutput.innerText = textInput.value.toUpperCase());
btnLower.addEventListener('click', () => textOutput.innerText = textInput.value.toLowerCase());
btnCap.addEventListener('click', () => textOutput.innerText = textInput.value.replace(/\b\w/g, c => c.toUpperCase()));
// Style Button
btnBold.addEventListener('click', () => {
  textOutput.style.fontWeight = textOutput.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

btnItalic.addEventListener('click', () => {
  textOutput.style.fontStyle = textOutput.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

btnUnderline.addEventListener('click', () => {
  textOutput.style.textDecoration = textOutput.style.textDecoration === 'underline' ? 'none' : 'underline';
});


// ------------- JOKE GENERATOR -------------
const jokeBtn = document.getElementById('joke-btn');
const jokeOutput = document.getElementById('joke-output');

async function getJoke() {
    jokeOutput.innerText = "Loading joke...";
  const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
  const data = await response.json();
  jokeOutput.innerText = data.joke;
}
jokeBtn.addEventListener('click', getJoke);
