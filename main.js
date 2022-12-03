

const menuBtn = document.querySelector('.menu-btn');
const navbar_ul = document.querySelector('.navbar ul');
const menuBtn_i = document.querySelector('.menu-btn i');

const meunOpen = function () {
    navbar_ul.classList.toggle('active');
    menuBtn_i.classList.toggle('active');
};

menuBtn.addEventListener('click', meunOpen);
