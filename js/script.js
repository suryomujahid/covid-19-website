window.onscroll = function() {stickyNavbar()};
let navbar = document.getElementsByTagName("nav")[0];
let stick = navbar.offsetTop;

function stickyNavbar(){
    if (window.pageYOffset >= stick){
        navbar.classList.add("scrollNav");
    }
    else{
        navbar.classList.remove("scrollNav");
    }
}