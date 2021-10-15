const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let interval = setInterval(blur, 30); // This is ms, not sec.
function blur() {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};