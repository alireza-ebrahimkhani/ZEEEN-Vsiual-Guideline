window.addEventListener('load', (event) => {
    var item_li, tab_div;
    var tab_div = document.querySelectorAll('.tab');
    tab_div.forEach(thisTab => {
        let item_li = thisTab.querySelectorAll('.tab__item');
        
        item_li.forEach((item , j) => {
            item.addEventListener('click' , function(){
                let content_div = thisTab.querySelectorAll('.tab__content');
                item_li.forEach(everyItems => {
                    everyItems.classList.remove('tab__item--active');
                });
                content_div.forEach(everyContents => {
                    everyContents.style.display = "none";
                });
                item.classList.add('tab__item--active');
                
                content_div[j].style.display = "block";
            });
           
       });
    });
    
    
    
    //console.log(tab_div);




  });