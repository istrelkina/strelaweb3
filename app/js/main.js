$(function () {

   $('.projects__items-hidden').hide();

   $('.projects-link-show').on('click', function () {
      $('.projects__items-hidden').show(800);
      $('.projects-link').addClass('noactive');
   });

   $('.projects-link-hide').on('click', function () {
      $('.projects__items-hidden').hide(800);
      $('.projects-link').removeClass('noactive');
   });



});