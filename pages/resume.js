const photo = document.querySelector('.about-left img');

document.addEventListener('scroll', function (e) {
    ScrollPosition = window.scrollY;
    console.log(ScrollPosition);
    if (ScrollPosition > 600) {
        photo.classList.add('active');
    }
});