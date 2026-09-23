const input = document.getElementById('input-field');
const output = document.getElementById('output-field');

const btnUpper = document.getElementById('uppercase');
const btnLower = document.getElementById('lowercase');
const btnCap = document.getElementById('capitalize');
const btnBold = document.getElementById('bold');
const btnItalic = document.getElementById('italic');
const btnUnderline = document.getElementById('underline');

// Update text whenever button is clicked
btnUpper.addEventListener('click', () => {
  output.innerText = input.value.toUpperCase();
});

btnLower.addEventListener('click', () => {
  output.innerText = input.value.toLowerCase();
});

btnCap.addEventListener('click', () => {
  output.innerText = input.value.replace(/\b\w/g, c => c.toUpperCase());
});

btnBold.addEventListener('click', () => {
  output.style.fontWeight = output.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

btnItalic.addEventListener('click', () => {
  output.style.fontStyle = output.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

btnUnderline.addEventListener('click', () => {
  output.style.textDecoration = output.style.textDecoration === 'underline' ? 'none' : 'underline';
});
