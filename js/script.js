

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav-main');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
   if(menu.classList.contains('active')){
      disableScroll.on();
   }else {
      disableScroll.off();
   }
})

body.onload = function () {
   let preloader = document.getElementById('preloader');
   preloader.style.display = "none";
}

