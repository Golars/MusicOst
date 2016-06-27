console.log('MAIN');
console.log($('.container'));
$('.m-slide-right').on('click', function(){
    var $selected = $('.m-slide-el:not(.active)');
    var $active = $('.m-slide-el.active');

    $active.removeClass('active');
    $selected.addClass('active');
})