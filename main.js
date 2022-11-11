const nav = document.querySelector('.nav')
const btn = document.getElementById ('menu-btn');
const menu = document.querySelector('.mobile-menu');
window.addEventListener('scroll', fixNav)
btn.addEventListener ('click', navToggle)
function fixNav() {
    if (window.scrollY > nav.offsetHeight + 100) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

function navToggle () {
    btn.classList.toggle('open');
    menu.classList.toggle('show-menu');
    document.body.classList.toggle('no-scroll')
}


var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i) {
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 7000);
    }
    repeater();
}
repeat();