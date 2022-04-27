let next = document.getElementById("nextSlide");
let back = document.getElementById("previousSlide");
let slider = document.getElementsByClassName("item--slider__flex");
let slide = document.getElementsByClassName("item-slide");

let index = 0

next.addEventListener('click', function () {
  if ((index + 1) < slide.length) {
    sliding(slider, slide, (index + 1), (index), 20);
    index++;
  }
});

back.addEventListener('click', function () {
  if (index > 0) {
    sliding(slider, slide, (index - 1), (index - 1), 0);
    index--;
  }
});

function sliding(a, b, i, j, k){
  a[0].style.left = "-"  + ((b[i].clientWidth * i) + ((20 * j) + k)) + "px";
  console.log(b[i].clientWidth);
  console.log(i);
  console.log(j);
  console.log(k);
}