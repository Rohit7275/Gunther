let aboutImg = document.querySelectorAll(".about-company img");
let aboutInfo = document.getElementsByClassName("about-us--info");
let imgSlide = document.getElementsByClassName("aboutimg--container");
let aboutSlide = document.getElementsByClassName("info--slide--container");
let navIndex = document.getElementsByClassName("aboutus--index");
let next = document.getElementsByClassName("forwardSlide");
let prev = document.getElementsByClassName("backSlide");

let index2 = 0;

next[0].addEventListener('click', function(){
  if((index2 + 1) < aboutImg.length)
  {
    sliding(imgSlide, aboutImg, (index2 + 1), 0);
    sliding(aboutSlide, aboutInfo, (index2 + 1), 0);
    for(let a = 0 ; a < navIndex.length ; a++)
    {
        if(navIndex[index2].classList.contains("active"))
        {
          navIndex[a].classList.remove("active");
          navIndex[index2 + 1].classList.add("active");
          aboutInfo[a].classList.remove("active");
          aboutInfo[index2 + 1].classList.add("active");
        }
    }
    index2++;
  }
});

prev[0].addEventListener('click', function(){
  if(index2 > 0)
  {
    sliding(imgSlide, aboutImg, (index2 - 1), 0);
    sliding(aboutSlide, aboutInfo, (index2 - 1), 0);
    for(let a = 0 ; a < navIndex.length ; a++)
    {
        if(navIndex[index2].classList.contains("active"))
        {
          navIndex[a].classList.remove("active");
          navIndex[index2 - 1].classList.add("active");
          aboutInfo[a].classList.remove("active");
          aboutInfo[index2 - 1].classList.add("active");
        }
    }
    index2--;
  }
});



function sliding(a, b, i, j){
  a[0].style.left = "-"  + ((b[i].clientWidth * i) + ((20 + (j-1)) * j)) + "px";
}