let next = document.getElementsByClassName("forwardSlide");
let prev = document.getElementsByClassName("backSlide");
let slider = document.getElementsByClassName("service--slider__flex");
let slide = document.getElementsByClassName("service");
let aboutImg = document.querySelectorAll(".about-company img");
let aboutInfo = document.getElementsByClassName("about-us--info");
let imgSlide = document.getElementsByClassName("aboutimg--container");
let aboutSlide = document.getElementsByClassName("info--slide--container");
let navIndex = document.getElementsByClassName("aboutus--index");

let index = 0;
let index2 = 0;

/**
*
* hero section slider
*
*/

/* button slider */

next[0].addEventListener('click', function(){
   if((index + 1) < slide.length)
   {
      sliding(slider, slide, (index + 1), (index + 1));
      for(let a = 0 ; a < slide.length ; a++)
      {
         if(slide[index].classList.contains("active"))
         {
            slide[a].classList.remove("active");
            slide[index + 1].classList.add("active");
         }
      }
      index++;
   }
});

prev[0].addEventListener('click', function(){
   if(index > 0)
   {
      sliding(slider, slide, (index - 1), (index - 1));
      for(let a = 0 ; a < slide.length ; a++)
      {
         if(slide[index].classList.contains("active"))
         {
            slide[a].classList.remove("active");
            slide[index - 1].classList.add("active");
         }
      }
      index--;
   }
});

/**
*
* about us slider
*
*/

next[1].addEventListener('click', function(){
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

prev[1].addEventListener('click', function(){
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

/*=============================================
=           button slider function            =
=============================================*/

function sliding(a, b, i, j){
   a[0].style.left = "-"  + ((b[i].clientWidth * i) + ((20 + (j-1)) * j)) + "px";
}

/*============  End of button slider function  =============*/

