let click = $('.click');
let birinci = $('#first');
let ikinci = $('#second');
let uchuncu = $('#third');

click.on('click', function () {
    if(ikinci.hasClass('react') && birinci.hasClass('birr') && uchuncu.hasClass('uchh')){
        ikinci.removeClass('react');
     birinci.removeClass('birr');
     uchuncu.removeClass('uchh');
    }
    else{
       ikinci.addClass('react');
     birinci.addClass('birr');
     uchuncu.addClass('uchh'); 
    }
     
})