const header = document.querySelector(".header");
const headerRect = header.getBoundingClientRect();
const headerHeight = headerRect.height;

document.addEventListener("scroll", function(){
    console.log(window.scrollY);
    if(window.scrollY > headerHeight){
        header.classList.add("header-dark")
    } else{
        header.classList.remove("header-dark");
    }
})



const box_01 = document.querySelector('about_content');

document.addEventListener("scroll", function(){
    console.log(window.scrollY);
    if(window.scrollY > 300){
        box_01.classList.add("closed");
    }else{
        box_01.classList.remove("closed");
    }
})



const photo_1 = document.querySelector(".home_avatar");
const text_1 = document.querySelector(".section_title");

photo_1.addEventListener("click", function(){
    text_1.style.color= "#ff6c00";
})



const main = document.querySelector(".home_container");
const mainHeight = main.offsetHeight;

document.addEventListener("scroll", function(){
    main.style.opacity = 1 (window.scrollY / homeHeight);
})





const home = document.querySelector(".home_container");
const homeHeight = home.offsetHeight;
const top_button = document.querySelector(".arrow_up");

home.addEventListener("scroll", function(){
    if ( window.scrollY > homeHeight / 2){
        top_button.style.opacity = 1;
    } else {
        top_button.style.opacit =0.1;
    }

})