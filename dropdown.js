let menuBtn = document.querySelector(".dropdown--icon");
let overFlow = document.getElementsByTagName("body");
let dropDown = document.querySelector("#dropdown");
console.log(overFlow);
let menuOpen = false;
console.log(menuBtn);

menuBtn.addEventListener('click', () => {
   if(!menuOpen)
   {
      dropDown.classList.add('open');
      overFlow[0].style.overflowY = "hidden";
      overFlow[0].style.height = "100vh"
      menuOpen = true;
   }
   else
   {
      dropDown.classList.remove('open');
      overFlow[0].style.overflowY = "visible";
      overFlow[0].style.height = "auto"
      menuOpen = false;
   }
});
