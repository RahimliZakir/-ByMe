
let progbar = $('.progress-bar');
let prog = $('.progress');

let element = $('<p/>');
element.addClass('element');
progbar.append(element);

element.html(`${0}%`);

$('[type=checkbox]').change(function (e) { 
    e.preventDefault();
    
   let hamisi = $('[type=checkbox');

   let sechilmish = $('[type=checkbox]:checked');

   let faiz = sechilmish.length * 100 / hamisi.length;

   $(prog).css('width', `${faiz}%`);

   element.html(`${faiz}%`);

});