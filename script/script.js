const slider = document.querySelector(".slideimg");

let i = 0;

setInterval(() => {
    slider.style.transform = `translateY(-${i * 299}px)`;
    i++;
    i === 3 && (i = 0);
}, 3000);

const tabbutton = document.querySelectorAll(".tabmenu li");
const notice = document.querySelector(".notice");
const gall = document.querySelector(".gall");

const nav = document.querySelector("nav");
const menuli = document.querySelectorAll(".menu>li>ul");

nav.addEventListener('mouseover', ()=>{
    for(let j = 0; j < 4; j++){
        menuli[j].classList.add('ani1');
    }
});

nav.addEventListener('mouseout', ()=>{
    for(let j = 0; j < 4; j++){
        menuli[j].classList.remove('ani1');
    }
});

tabbutton[0].addEventListener("click", () => {
    tabbutton[0].style.background = "darkkhaki"
    tabbutton[1].style.background = "white"
	notice.style.display = "block";
	gall.style.display = "none";
});

tabbutton[1].addEventListener("click", () => {
    tabbutton[1].style.background = "darkkhaki"
    tabbutton[0].style.background = "white"
	notice.style.display = "none";
	gall.style.display = "block";
});
