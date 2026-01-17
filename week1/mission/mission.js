let selectElem = document.querySelector("select");
let logo = document.querySelector("img")
let h3 = document.querySelector("h3")

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == "dark") {
        document.body.style.backgroundColor = "#333";
        logo.src = "byui-logo-white.png";
        document.body.style.color = "white"
        h3.style.color = "lightblue"
    }
    else {
        document.body.style.backgroundColor = "white";
        logo.src = "byui-logo-blue.webp";
        document.body.style.color = "black"
        h3.style.color = "blue"
    }
}