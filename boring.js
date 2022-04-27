let next = document.getElementsByClassName("forwardSlide");
let prev = document.getElementsByClassName("backSlide");
let aboutImg = document.querySelectorAll(".about-company img");
let aboutInfo = document.getElementsByClassName("about-us--info");
let imgSlide = document.getElementsByClassName("aboutimg--container");
let aboutSlide = document.getElementsByClassName("info--slide--container");
let navIndex = document.getElementsByClassName("aboutus--index");
let machineType = document.querySelectorAll(".machine-repairs h3");
let repairType = document.getElementsByClassName("repairs-type");
let repairbtn = document.getElementsByClassName("drop-btn");
let machineDrop = document.getElementsByClassName("machine-repairs");

/*=============================================
=                   SLIDER                   =
=============================================*/

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

/*============  End of SLIDER  =============*/


/*=============================================
=                   REPAIRS                   =
=============================================*/

for(let x = 0; x < machineType.length; x++) {
  machineType[x].addEventListener('click', function(){
    for(let y = 0; y < machineType.length; y++) {
      machineType[y].classList.remove("active");
      repairType[y].classList.remove("active");
    }
    machineType[x].classList.add("active");
    repairType[x].classList.add("active");
    setTimeout(function(){
      repairType[x].classList.add("show");
    }, 300);
    document.querySelector(".drop-btn h3").innerHTML = machineType[x].innerHTML;
  });
}

repairbtn[0].addEventListener('click', function(){
  machineDrop[0].classList.toggle("active");
  repairbtn[0].classList.toggle("active");
});

/*============  End of REPAIRS  =============*/
