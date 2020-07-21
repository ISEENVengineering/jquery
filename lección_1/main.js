//jQuery('li').css('color','red');
/*
$(document).ready(function(){
    $('li').css('color','red');
})
*/
//cuando esté listo document
$(function(){
    $('li').addClass('textoVerde')
})











$(function () {

    setInterval(() => {
        $('li').css('color', 'blue');
        $('body').css('backgound-color', 'blue');
        $('body').css('background-color', 'green');
        $('li').css('color', 'green');
        console.log('tag');
    },111500)
})
setInterval(() => {
    $('li').css('color', 'black');
    $('body').css('backgound-color', 'yellow');
    $('body').css('background-color', 'blue');
    console.log('tag')
},111000)