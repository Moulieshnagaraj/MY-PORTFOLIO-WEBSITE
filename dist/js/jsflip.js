// Masonry Initialize
var container = document.querySelector('.projects-container');
var msnry = new Masonry( container, {
  // options
  itemSelector: '.work-gallery-project'
});

$('.story-button').hover(function () {
      $(this).children('.flip-container').toggleClass('flip');
      return false;
  });