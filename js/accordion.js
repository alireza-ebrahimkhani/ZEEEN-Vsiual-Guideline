document.addEventListener('DOMContentLoaded', function () {
    let comAaccordion_div = document.querySelectorAll(".accordion");
    comAaccordion_div.forEach(comAaccordion_div => {
      let comHeader_div = comAaccordion_div.querySelectorAll(".accordion__header");
      let comBody_div = comAaccordion_div.querySelectorAll(".accordion__body");
      let comItem_li = comAaccordion_div.querySelectorAll(".accordion__item");
      comHeader_div.forEach(comHeader_div => {
        comHeader_div.addEventListener('click', function () {
              if (comHeader_div.nextElementSibling.classList.contains('accordion__body--active'))	{
                  this.nextElementSibling.classList.remove('accordion__body--active');
              } else{
                  comBody_div.forEach(comBody_div => {
                  comBody_div.classList.remove('accordion__body--active');
                      });
                  this.nextElementSibling.classList.add('accordion__body--active');
                  }
        });
      });
    });
  });
  