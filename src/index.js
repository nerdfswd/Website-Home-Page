const textEl = document.getElementById("text");

let idx = 1;
let speed = 300 / 1;
let text = textEl.innerHTML;
autoText();

function autoText() {
  textEl.innerHTML = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(autoText, speed);
}
