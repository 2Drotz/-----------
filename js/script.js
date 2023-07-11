
let body = document.querySelector('body');
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav-main');


menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
   body.classList.toggle('no-scroll');
})

body.onload = function () {
   let preloader = document.getElementById('preloader');
   preloader.style.display = "none";
}