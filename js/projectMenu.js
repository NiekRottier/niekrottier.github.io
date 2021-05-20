// All menu items
let menuItem1 = document.getElementById("menuItem1")
let menuItem2 = document.getElementById("menuItem2")
let menuItem3 = document.getElementById("menuItem3")

// hr elements' heights
let hrSummary = document.getElementById("hrSummary").offsetTop
let hrGallery = document.getElementById("hrGallery").offsetTop

let scrollPosition = window.scrollY;

function activateScrollMenu() {
    scrollPosition = window.scrollY
    if (scrollPosition < hrSummary - 100) {
        menuItem2.classList.remove("active")
        menuItem1.classList.add("active")
    }
    else if (scrollPosition > hrSummary - 100 && scrollPosition < hrGallery -100) {
        (menuItem2.classList.contains("active")) ? menuItem1.classList.remove("active") : menuItem3.classList.remove("active");
        menuItem2.classList.add("active")
    }
    else if (scrollPosition > hrGallery - 100) {
        menuItem2.classList.remove("active")
        menuItem3.classList.add("active")
    }
}

// Run once to start with the right circle colored
activateScrollMenu()

document.addEventListener("scroll", activateScrollMenu)