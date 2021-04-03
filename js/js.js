//menu
document.addEventListener('DOMContentLoaded', (event) => {
    let hamico_div = document.querySelector(".header__hamico");
    let line_div = document.querySelector(".header__hamline");
    let mainNav__div = document.querySelector(".main__nav");
    let body__body = document.querySelector("body");
    
    hamico_div.addEventListener("click" , togglemenu);
    let showMenu = false;
    function togglemenu(){
        if (!showMenu){
            line_div.classList.add('header__hamline--open');
            mainNav__div.classList.add('main__nav--open');
            body__body.style.overflow = "hidden";
            showMenu = true;
        }else {
            line_div.classList.remove('header__hamline--open');
            mainNav__div.classList.remove('main__nav--open');
            body__body.style.overflow = "auto";
            showMenu = false;
        }
            
    }
    window.addEventListener("resize" , function(){ 
        if(showMenu && window.outerWidth >= 900){
            line_div.classList.remove('header__hamline--open');
            mainNav__div.classList.remove('main__nav--open');
            body__body.style.overflow = "auto";
            showMenu = false;
        }
    });
    let heading_h2 = document.querySelectorAll('.node-name--H2');
            heading_h2.forEach(heading => {
                heading.addEventListener('click' , closeMenu);
                function closeMenu(){
                line_div.classList.remove('header__hamline--open');
                mainNav__div.classList.remove('main__nav--open');
                body__body.style.overflow = "auto";
                showMenu = false;
                }
                
            });
           
  });

//translate switch
function toggleSwitch(){
    var transSwitch = document.querySelector(".header__transSwitch").classList.toggle('header__transSwitch--active');;
    var transPin = document.querySelector(".header__transPin").classList.toggle('header__transPin--active');
    var textFa_p = document.querySelectorAll(".fa");
    textFa_p.forEach(textFa_p => {
        textFa_p.classList.toggle('fa--show');
    });
}
//hide header
var lastScroll = 0, delta= 200;
window.addEventListener('scroll' , function(){
    var mainNav__div = document.querySelector(".main__nav");
    var nowScroll = window.pageYOffset;
    if (Math.abs(lastScroll - nowScroll) > delta){
        var header_header = document.querySelector('header');
        var mainNav_div = document.querySelector('.main__nav');
        var hamico_div = document.querySelector('.header__hamico');
    if (nowScroll > lastScroll &&  lastScroll != 0 && mainNav__div.classList.contains("main__nav--open")==false){
        header_header.classList.add('header--hidden');
        mainNav_div.classList.add('main__nav--up');
        hamico_div.classList.add('header__hamico--hidden');
    } else if(nowScroll < lastScroll) {
        header_header.classList.remove('header--hidden');
        mainNav_div.classList.remove('main__nav--up');
        hamico_div.classList.remove('header__hamico--hidden');
    }
    
    lastScroll = nowScroll;
    }
    
});
