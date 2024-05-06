$(document).ready(function() {
    $('.read-more-btn').click(function() {
      $(this).siblings('.talk-details').slideToggle();
      $(this).text($(this).text() === 'Read More' ? 'Read Less' : 'Read More');
    });
  });