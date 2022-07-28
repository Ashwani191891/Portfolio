const home_section = document.querySelector(".home")

const project_section = document.querySelector(".project")

const about_section = document.querySelector(".about")

const contact_section = document.querySelector(".contact")


const homeLink = document.getElementById('homeLink')
const aboutLink = document.getElementById('aboutLink')
const projectLink = document.getElementById('projectLink')
const contactLink = document.getElementById('contactLink')


homeLink.addEventListener('click', function() {
    project_section.style.display = "none"
    about_section.style.display = "none"
    home_section.style.display = "block"
    contact_section.style.display = "none"
});

projectLink.addEventListener('click', function() {
    project_section.style.display = "block"
    about_section.style.display = "none"
    home_section.style.display = "none"
    contact_section.style.display = "none"
});

aboutLink.addEventListener('click', function() {
    project_section.style.display = "none"
    about_section.style.display = "block"
    home_section.style.display = "none"
    contact_section.style.display = "none"
});

contactLink.addEventListener('click', function() {
    project_section.style.display = "none"
    about_section.style.display = "none"
    home_section.style.display = "none"
    contact_section.style.display = "block"
});