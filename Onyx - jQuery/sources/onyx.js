let icon = document.querySelectorAll(".plus-icon");
let partsPages = document.querySelector('.parts-p-pages')
let partsParts = document.querySelector('.parts-parts');
let minusIccon = $('.parts-pages-minus');

$(document).ready(function () {
   icon.forEach(function (param) {
    param.addEventListener('click', () => {
        let result = param.classList.contains('plus-icon-color');
        if (!result) {
            param.classList.add('plus-icon-color');
        }

        else {
            param.classList.remove('plus-icon-color');
        }
    })
});


$(partsPages).click(function (e) { 
    e.preventDefault();

   if($(partsParts).css('display')=='block'){
       $(partsParts).hide();
       
       minusIccon.text('+');
   }
   else{
       $(partsParts).show();
       minusIccon.text('−');
   }
}); 

$(minusIccon).click(function (e) { 
    e.preventDefault();

   if($(partsParts).css('display')=='block'){
       $(partsParts).hide();
       
       minusIccon.text('+');
   }
   else{
       $(partsParts).show();
       minusIccon.text('−');
   }
}); 

});



