let service_btn = document.getElementsByClassName("our-service--dropdown");
let service_drop = document.getElementsByClassName("our-services--grid");
let service_newHeight = service_drop[0].scrollHeight;
let service_height = service_drop[0].clientHeight;
let industries_btn = document.getElementsByClassName("industries--dropdown");
let industries_drop = document.getElementsByClassName("industries--grid");
let industries_height = industries_drop[0].clientHeight;
let industries_newHeight = industries_drop[0].scrollHeight;

let a = 1;


function orgHeight(e, f ,g) {
   if(a == 1)
   {
      e[0].style.height = f + "px";
      a = 0;
   }
   else
   {
      e[0].style.height = g + "px";
      a = 1;
   }
}

service_btn[0].addEventListener('click', function(){
   orgHeight(service_drop, service_newHeight, service_height);
});

industries_btn[0].addEventListener('click', function(){
   orgHeight(industries_drop, industries_newHeight, industries_height);
});
