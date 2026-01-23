let menuBtn = document.querySelector("button")
let nav = document.querySelector("nav")

menuBtn.addEventListener("click", function() {
    nav.classList.toggle("show");
});