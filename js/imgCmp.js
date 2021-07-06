

document.addEventListener('DOMContentLoaded', () => {
  var imgComparison_div = document.querySelectorAll(".imgComparison");

  imgComparison_div.forEach(el => {
    let resizableImg_img = el.querySelector('.imgComparison__resizableImg');
    let fixedImg_img = el.querySelector('.imgComparison__fixedImg');
    let mainWidth = el.getBoundingClientRect().width;
    resizableImg_img.style.width = mainWidth + "px";
    fixedImg_img.style.width = mainWidth + "px";


    let slider = el.querySelector('.imgComparison__silder');
    slider.addEventListener('input', slied => {
      var resizableFrame_div = el.querySelector('.imgComparison__resizableFrame');
      resizableFrame_div.style.width = slied.target.value + '%';
    });

    window.addEventListener('resize', function () {
      let mainWidth = el.getBoundingClientRect().width;
      resizableImg_img.style.width = mainWidth + "px";
      fixedImg_img.style.width = mainWidth + "px";
    });
  });


});
