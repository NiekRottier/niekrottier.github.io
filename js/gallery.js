// Get images and exit button
let images = document.getElementsByClassName("image")
let exit = document.getElementById("exitImage")

// Add events to all the images 
for (let image of images) {
    image.addEventListener("click", (e) => openModal(e))
}

// Add event to the exit
exit.addEventListener("click", closeModal)

// Open the modal and show the exit button
function openModal(e) {
    e.target.classList.add("activeImage")

    exit.hidden = false
}

// Get all open images and close them. Hide exit button
function closeModal() {
    openImages = document.getElementsByClassName("activeImage")
    for (let image of openImages) {
        image.classList.remove("activeImage")
    }

    exit.hidden = true
}