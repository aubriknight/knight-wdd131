
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', function() {
    nav.classList.toggle('show');
    menuBtn.classList.toggle('change');
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 700) {
        nav.classList.remove('show')
        menuBtn.classList.remove('change');
      }    
});


// debouncing