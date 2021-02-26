$("body").niceScroll({
        cursorcolor:"#ffc107",
        cursorwidth: "8px",   
});

const houses = document.querySelector('.houses');
const scrollLine = document.getElementById('scroll');
const scrollbtn = document.querySelector('.scrollbtn');

scrollLine.addEventListener("click", function () {
    houses.scrollIntoView({ behavior: "smooth" })
});

scrollbtn.addEventListener('click', function () {
 window.scroll({top: 0, left: 0, behavior: 'smooth'});
});

window.onscroll = function (e) {
    if (window.pageYOffset > 1000) {
        scrollbtn.style.zIndex='99';
        
        scrollbtn.style.opacity = '1';
    } else {
       scrollbtn.style.zIndex='-1';
        scrollbtn.style.opacity = '0';
   }
}
