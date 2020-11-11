const loader = document.getElementById('overlay');
window.addEventListener('load', function() {
    loader.style.display = "none";
});

$(document).on('click', '.olink', function() {
    event.preventDefault()
    var linkTo = $(this).attr("href")
    /* document.querySelector(linkTo).scrollIntoView({ 
        top: 100,
        behavior: 'smooth' 
    }); */
    $('html, body').animate({scrollTop: $(linkTo).offset().top -100 }, 'slow');
})

$(document).on('click', '.stabs a', function() {
    event.preventDefault()
    var tablink = $(this).attr("href")
    $(".stabs a.uk-active").removeClass("uk-active")
    $(this).addClass("uk-active")

    $(".skill-section .exp.active").removeClass("active")
    $(tablink).addClass("active")
})

var totop = document.getElementById("totop")
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
            totop.style.display = "block"
    } else {
        totop.style.display = "none"
    }
});