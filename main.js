$(function(){

  var $area2 = $('.area2');
  var $area3 = $('.area3');
  var $offset = 500;
  var $area2OST = $area2.offset().top - $offset;
  var $area3OST = $area3.offset().top - $offset;

  $(window).scroll(function(){
    if($(this).scrollTop() > $area2OST) {
      $area2.find('.div2').addClass('animate');
    }
    if($(this).scrollTop() > $area3OST) {
      $area3.find('.div3').addClass('animate');
    }
  });
});

function open1(){
  window.open('page2.html');
}
function open2(){
  window.open('page2.html', '_blank');
}