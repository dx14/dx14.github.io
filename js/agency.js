/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/*
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})
*/

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$("#voogasalad").on("click", function() {
    $('#voogasalad-modal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

$("#slogo").on("click", function() {
    $('#slogo-modal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

$("#cellsociety").on("click", function() {
    $('#cellsociety-modal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

$("#game").on("click", function() {
    $('#game-modal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});