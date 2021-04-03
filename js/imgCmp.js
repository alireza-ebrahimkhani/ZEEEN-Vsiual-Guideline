document.addEventListener('DOMContentLoaded', () => {
  var imgComparison_div = document.querySelectorAll(".imgComparison");
  
    imgComparison_div.forEach(imgComparison_div => {
      var resizableImg_img = imgComparison_div.querySelector('.imgComparison__resizableImg');
      var fixedImg_img = imgComparison_div.querySelector('.imgComparison__fixedImg');
      var mainWidth = imgComparison_div.getBoundingClientRect().width;
      resizableImg_img.style.width = mainWidth + "px";
      fixedImg_img.style.width = mainWidth + "px";

        window.addEventListener('resize' , compare);
        function compare(){
          var resizableImg_img = imgComparison_div.querySelector('.imgComparison__resizableImg');
          var fixedImg_img = imgComparison_div.querySelector('.imgComparison__fixedImg');
          var mainWidth = imgComparison_div.getBoundingClientRect().width;
          resizableImg_img.style.width = mainWidth + "px";
          fixedImg_img.style.width = mainWidth + "px";
        };
        var slider = imgComparison_div.querySelector('.imgComparison__silder');
        slider.addEventListener('input', slied => {
          var resizableFrame_div = imgComparison_div.querySelector('.imgComparison__resizableFrame');
          resizableFrame_div.style.width = slied.target.value + '%';
        });
    });
});
