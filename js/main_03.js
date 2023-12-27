//마우스 스크롤 화면 반 내려오면 탑버튼 숨겼다가 다시 나타남//

const home = document.querySelector(".home_container");
const homeHeight = home.offsetHeight;
const top_button = document.querySelector(".arrow_up");

document.addEventListener("scroll", function(){
    if(window.scrollY > homeHeight / 2) {
        top_button.style.opacity = 1;
    } else {
        top_button.style.opacity = 0;
    }
})

//Skills 부분에 스크롤 되면 슬라이드 되도록 변경//

const skillsbox = document.querySelector("#skills")
const skillsHeight = skillsbox.offsetHeight;
const skills_content = document.querySelector(".skills_content");

document.addEventListener("scroll", function(){
    if(window.scrollY > skillsHeight / 2)  {
        skills_content.style.marginTop = "0px";
        skills_content.style.opacity = 1;
    } else { 
        skills_content.style.marginTop = "-200px";
        skills_content.style.opacity= 0.1;
    }
})




