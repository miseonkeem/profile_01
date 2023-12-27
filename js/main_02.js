const home = document.querySelector(".home_container");
const homeHeight = home.offsetHeight;

document.addEventListener("scroll", function(){
    home.style.opacity = 1 - (window.scrollY / homeHeight);
})



const photo_01 = document.querySelector(".home_avatar");
const title_01 = document.querySelector(".section_title");

photo_01.addEventListener("click", function() {
    title_01.style.color="#ff6c00";
})

