$(document).ready(function () {
   $('.wrapper-jquery__question').click(function () {

      if ($('#on-off').is(':checked')) {
         // можно открыть много вопросов
         $(this).parent().toggleClass('wrapper-jquery__answer-item--active');
      } else {
         const parent = $(this).parent();
         // проверка на активность вопроса
         if (parent.hasClass('wrapper-jquery__answer-item--active')) {
            parent.removeClass('wrapper-jquery__answer-item--active')
         } else {
            $('.wrapper-jquery__faq').removeClass('wrapper-jquery__answer-item--active')
            parent.addClass('wrapper-jquery__answer-item--active')
         }
      }

   })
});