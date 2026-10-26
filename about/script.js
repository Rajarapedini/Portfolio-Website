$(document).ready(function () {

    // mobile menu toggle
    $('#menu').click(function () {
        $(this).toggleClass('bx-menu bx-x');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('bx-x').addClass('bx-menu');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });

    // smooth scroll to top
    $('#scroll-top').on('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// tab title / favicon swap when the user leaves the tab
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
        document.title = 'About | Rajarao Pedini';
        $('#favcon').attr('href', '/images/avatar.jpg');
    } else {
        document.title = 'Come Back To Portfolio';
        $('#favcon').attr('href', '/images/favhand.png');
    }
});

// subtle tilt on the photo (desktop only)
if (window.matchMedia('(hover: hover)').matches && window.VanillaTilt) {
    VanillaTilt.init(document.querySelector('.bio-hero .photo img'), { max: 8, speed: 400, glare: true, 'max-glare': 0.15 });
}
