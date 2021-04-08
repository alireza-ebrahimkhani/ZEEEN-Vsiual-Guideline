//menu
document.addEventListener('DOMContentLoaded', (event) => {
    let hamico_div = document.querySelector(".header__hamico");
    let line_div = document.querySelector(".header__hamline");
    let mainNav__div = document.querySelector(".header__items");
    let logoDynamic__svg = document.querySelector(".header__logoSvgDynamic");
    let body__body = document.querySelector("body");

    hamico_div.addEventListener("click", togglemenu);
    let showMenu = false;
    function togglemenu() {
        if (!showMenu) {
            line_div.classList.add('header__hamline--open');
            mainNav__div.classList.add('header__items--open');
            logoDynamic__svg.classList.add('header__logoSvgDynamic--inline');
            body__body.style.overflow = "hidden";
            showMenu = true;
        } else {
            line_div.classList.remove('header__hamline--open');
            mainNav__div.classList.remove('header__items--open');
            logoDynamic__svg.classList.remove('header__logoSvgDynamic--inline');
            body__body.style.overflow = "auto";
            showMenu = false;
        }

    }
    window.addEventListener("resize", function () {
        if (showMenu && window.outerWidth >= 900) {
            line_div.classList.remove('header__hamline--open');
            mainNav__div.classList.remove('header__items--open');
            logoDynamic__svg.classList.remove('header__logoSvgDynamic--inline');
            body__body.style.overflow = "auto";
            showMenu = false;
        }
    });
    let heading_h2 = document.querySelectorAll('.node-name--H2');
    heading_h2.forEach(heading => {
        heading.addEventListener('click', closeMenu);
        function closeMenu() {
            line_div.classList.remove('header__hamline--open');
            mainNav__div.classList.remove('header__items--open');
            body__body.style.overflow = "auto";
            showMenu = false;
        }

    });

    let colorSection_section = document.querySelectorAll(".panel");
    window.addEventListener('scroll', function () {
        let nowScroll = window.pageYOffset;
        for(let i = 0; i < colorSection_section.length ; i++){
            let colorStart= colorSection_section[i].offsetTop;
            let colorEnd = colorSection_section[i].scrollHeight + colorStart;
            let color = colorSection_section[i].dataset.color;

                if (nowScroll > colorStart && nowScroll < colorEnd){
                    body__body.className = "";;
                    body__body.classList.add(color);
                }else{
                    continue;
                }
            
            /*if (nowScroll > colorStart && nowScroll < colorEnd){
                console.log("hi")
                body__body.classList.add(color);
            }if(nowScroll > colorEnd || nowScroll < colorStart){
                body__body.classList.remove(color);
            }*/
        }
    });
});

//translate switch
function toggleSwitch() {
    var transSwitch = document.querySelector(".header__transLine").classList.toggle('header__transLine--active');;
    var transPin = document.querySelector(".header__transPin").classList.toggle('header__transPin--active');
    var textFa_p = document.querySelectorAll(".fa");
    textFa_p.forEach(textFa_p => {
        textFa_p.classList.toggle('fa--show');
    });
}
//hide header
/*var lastScroll = 0, delta= 200;
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
*/