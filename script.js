// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 800);

        }, 500);
    }
});


// =========================
// THEME TOGGLE
// =========================

const themeBtn = document.querySelector(".theme-toggle");
const html = document.documentElement;

let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
}

if (themeBtn) {

    themeBtn.onclick = () => {

        let current =
            html.getAttribute("data-theme");

        let next =
            current === "dark" ? "light" : "dark";

        html.setAttribute("data-theme", next);

        localStorage.setItem("theme", next);

        themeBtn.textContent =
            next === "dark" ? "🌙" : "☀️";
    };
}


// =========================
// MOBILE MENU
// =========================

const menuBtn =
document.querySelector(".mobile-toggle");

const drawer =
document.querySelector(".mobile-drawer");


if(menuBtn && drawer){

menuBtn.onclick = () => {
    drawer.classList.toggle("active");
};


document.querySelectorAll(".mobile-drawer a")
.forEach(link => {

    link.onclick = () => {
        drawer.classList.remove("active");
    };

});

}


// =========================
// TYPING EFFECT
// =========================

const typing =
document.getElementById("typing");

const texts = [
    "Frontend Developer",
    "UI Designer",
    "JavaScript Learner",
    "Creative Coder"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;


function typingEffect(){

if(!typing) return;


let text = texts[textIndex];


if(!Deleting){

typing.textContent =
text.substring(0,charIndex++);


if(charIndex > text.length){

deleting = true;

setTimeout(typingEffect,1000);

return;

}

}

else{

typing.textContent =
text.substring(0,charIndex--);


if(charIndex === 0){

deleting = false;

textIndex++;

if(textIndex >= texts.length)
textIndex = 0;

}

}


setTimeout(
typingEffect,
deleting ? 50 : 100
);

}


typingEffect();


// =========================
// SKILL BARS
// =========================

const skillBars =
document.querySelectorAll(".skill-progress-fill");


const skillObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

skillBars.forEach(bar => {

bar.style.width =
bar.dataset.width;

});

}

});

});


const skills =
document.querySelector("#skills");


if(skills)
skillObserver.observe(skills);


// =========================
// COUNTERS
// =========================

let counterStarted = false;


function runCounters(){

if(counterStarted) return;

counterStarted = true;


document.querySelectorAll(".counter-number")
.forEach(counter => {


let target =
Number(counter.dataset.target);

let count = 0;


let interval =
setInterval(()=>{


count++;


counter.textContent =
count;


if(count >= target){

clearInterval(interval);

counter.textContent =
target + "+";

}


},30);


});

}


window.addEventListener("scroll",()=>{

const about =
document.querySelector("#about");


if(about){

if(
about.getBoundingClientRect().top <
window.innerHeight-100
){

runCounters();

}

}

});


// =========================
// MOUSE GLOW
// =========================

const glow =
document.querySelector(".mouse-glow");


document.addEventListener("mousemove",e=>{

if(glow){

glow.style.left =
e.clientX+"px";

glow.style.top =
e.clientY+"px";

glow.style.opacity="1";

}

});


// =========================
// ACTIVE NAV
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{

let current="";


sections.forEach(section=>{

if(
scrollY >= section.offsetTop - 150
){

current = section.id;

}

});


navLinks.forEach(link=>{

link.classList.remove("active");


if(
link.getAttribute("href")
===
"#"+current
){

link.classList.add("active");

}

});

});


// =========================
// HIDE NAVBAR
// =========================

let lastScroll = 0;

const nav =
document.querySelector("nav");


window.addEventListener("scroll",()=>{


let current =
window.scrollY;


if(nav){

if(current > lastScroll && current > 100){

nav.classList.add("nav-hidden");

}

else{

nav.classList.remove("nav-hidden");

}

}


lastScroll=current;


});


// =========================
// PROJECT TILT
// =========================

document.querySelectorAll(".project-card")
.forEach(card=>{


card.addEventListener("mousemove",e=>{


let box =
card.getBoundingClientRect();


let x =
e.clientX-box.left;


let y =
e.clientY-box.top;


card.style.transform =
`
perspective(1000px)
rotateX(${(y-box.height/2)/25}deg)
rotateY(${(x-box.width/2)/25}deg)
`;

});


card.addEventListener("mouseleave",()=>{

card.style.transform="";

});


});


// =========================
// RIPPLE BUTTONS
// =========================

document.querySelectorAll(".btn")
.forEach(button=>{


button.addEventListener("click",e=>{


let ripple =
document.createElement("span");


ripple.className="ripple";


let rect =
button.getBoundingClientRect();


ripple.style.left =
e.clientX-rect.left+"px";


ripple.style.top =
e.clientY-rect.top+"px";


button.appendChild(ripple);


setTimeout(()=>{

ripple.remove();

},600);


});


});


// =========================
// CONTACT FORM
// =========================

const form =
document.getElementById("contactForm");


if(form){

form.addEventListener("submit",e=>{

e.preventDefault();


alert(
"Message sent successfully!"
);


form.reset();


});

}


// =========================
// FOOTER YEAR
// =========================

const year =
document.getElementById("year");


if(year){

year.textContent =
new Date().getFullYear();

}
