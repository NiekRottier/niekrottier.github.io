let projects = [
    "urbanJungle",
    "jsai",
    "nieuwsradar",
    "projectPigeon",
    "reactNotes",
    "backendApi",
    "laravelGallery"
]

projects.forEach(project => {
    console.log("TEST");
    let href = "./" + project + ".html";
    document.getElementById(project).addEventListener("click", () => window.location.href = href)
});