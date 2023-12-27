/*여러줄 주석문 설정*/
//1줄 주석문


/*마우스를 아래로 할때 header에 있는 메인메뉴 색상 변경*/
const header = document.querySelector('.header');
const headerRect = header.getBoundingClientRect();
const headerHeight = headerRect.height;

document.addEventListener("scroll", function(){
 /* console.log(window.scrollY);*/
    if(window.scrollY > headerHeight){
        header.classList.add("header-dark");
    } else{
        header.classList.remove("header-dark");
    }
})


const box1 = document.querySelector('.about_content');

document.addEventListener("scroll", function(){
   /* console.log(window.scrollY);*/
    if(window.scrollY > 300) {
        box1.classList.add("closed");
    } else{
        box1.classList.remove("closed");
    }
})

