window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset;
    var socialIcons = document.querySelectorAll('.social-icons .topIcons');
    var socialIcons2 = document.querySelectorAll('.vl');

    if (scrollPosition > 20) {
        socialIcons2[0].classList.add('vlc');
        socialIcons.forEach(function (icon) {
            icon.classList.add('scroll-color');
        });
    } else {
        socialIcons2[0].classList.remove('vlc');
        socialIcons.forEach(function (icon) {
            icon.classList.remove('scroll-color');
        });
    }
});
