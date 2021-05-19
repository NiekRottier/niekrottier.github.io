// All menu items
let menuItem1 = document.getElementById("menuItem1")
let menuItem2 = document.getElementById("menuItem2")
let menuItem3 = document.getElementById("menuItem3")
let menuItem4 = document.getElementById("menuItem4")

// hr elements' heights
let hrAboutMe = document.getElementById("hrAboutMe").offsetTop
let hrProjects = document.getElementById("hrProjects").offsetTop
let hrContact = document.getElementById("hrContact").offsetTop

let scrollPosition = window.scrollY;

function activateScrollMenu() {
    scrollPosition = window.scrollY
    if (scrollPosition < hrAboutMe - 100) {
        menuItem2.classList.remove("active")
        menuItem1.classList.add("active")
    }
    else if (scrollPosition > hrAboutMe - 100 && scrollPosition < hrProjects -100) {
        (menuItem2.classList.contains("active")) ? menuItem1.classList.remove("active") : menuItem3.classList.remove("active");
        menuItem2.classList.add("active")
    }
    else if (scrollPosition > hrProjects - 100 && scrollPosition < hrContact - 100) {
        (menuItem2.classList.contains("active")) ? menuItem2.classList.remove("active") : menuItem4.classList.remove("active");
        menuItem3.classList.add("active")
    }
    else if (scrollPosition > hrContact - 100) {
        menuItem3.classList.remove("active")
        menuItem4.classList.add("active")
    }
}

// Run once to start with the right circle colored
activateScrollMenu()

document.addEventListener("scroll", activateScrollMenu)