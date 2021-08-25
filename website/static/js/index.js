window.onscroll = function () {
    var el = document.getElementsByClassName('header')[0];
    var className = 'small';
    if (el.classList) {
        if (window.scrollY > 10)
            el.classList.add(className);
        else
            el.classList.remove(className);
    }
};

(function ($) {
    $(function () {

        //  open and close nav 
        $('#navbar-toggle').click(function () {
            $('nav ul').slideToggle();
        });


        // Hamburger toggle
        $('#navbar-toggle').on('click', function () {
            this.classList.toggle('active');
        });


        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.navbar-dropdown').slideToggle("slow");

            // Close dropdown when select another dropdown
            $('.navbar-dropdown').not($(this).siblings()).hide("slow");
            e.stopPropagation();
        });


        // Click outside the dropdown will remove the dropdown class
        $('html').click(function () {
            $('.navbar-dropdown').hide();
        });
    });
})(jQuery);

$(document).ready(function(){
  $(".testimonial .indicators li").click(function(){
    var i = $(this).index();
    var targetElement = $(".testimonial .tabs li");
    targetElement.eq(i).addClass('active');
    targetElement.not(targetElement[i]).removeClass('active');
            });
            $(".testimonial .tabs li").click(function(){
                var targetElement = $(".testimonial .tabs li");
                targetElement.addClass('active');
                targetElement.not($(this)).removeClass('active');
            });
        });
$(document).ready(function(){
    $(".slider .swiper-pagination span").each(function(i){
        $(this).text(i+1).prepend("0");
    });
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


