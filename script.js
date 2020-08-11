$(function () {
    new WOW().init();
    $('.owl-carousel').owlCarousel();

    /* sticky navbar*/
var navbar_height=$('.navbar-pos').outerHeight();
$(window).scroll(function () {
var scroll=$(window).scrollTop();
if(scroll>navbar_height){
    $('.navbar-pos').addClass('fixed');
}else {
    $('.navbar-pos').removeClass('fixed');
}
})
    /*end sticky navbar */

    /*Filter product*/
    var hot_prod=$('.cards .card-deck .Hot');
    var New_prod=$('.cards .card-deck .New');
    var sale_prod=$('.cards .card-deck .Sale');

    $('.product-bar ul li').click(function () {
      if($(this).text()=='Hot Products'){
          hot_prod.delay().fadeIn();
          New_prod.css('display','none');
          sale_prod.css('display','none');
      }
      else if($(this).text()=='New Products'){
          New_prod.fadeIn();
          hot_prod.css('display','none');
          sale_prod.css('display','none');
      }
      else if($(this).text()=='Sale Products'){
          sale_prod.fadeIn();
          hot_prod.css('display','none');
          New_prod.css('display','none');
      }
      else  {
          $('.cards .card-deck .card-prod').fadeIn();
      }
    })

    /*end filter js*/
    /*start sort js*/

    /*end sort js*/
    /*add / minus one of price*/
$('.cart-item ul #minaus').click(function () {
    var quantity=$('#val-quant').text();
    if(quantity>0){
     quantity=quantity-1;
    $('#val-quant').text(quantity);}
})
$('.cart-item ul #plus').click(function () {
    /*+ in js to add to string , so at first convert string contain num to float or int*/
     var original=parseFloat($('#val-quant').text())
     var newValue=original+1;
    $('#val-quant').text(newValue);
})
    /*end add / minus one of price*/
/*owl cursol*/

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:true,
        navText:['<button type="button" class="btn slider-left-btn"> </button>','<button type="button" class="btn slider-right-btn"> </button>'],
        margin:10,
        responsive:{
            0:{
                items:1
            },
            120:{
                items:3
            },
            960:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

})