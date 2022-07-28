const home_section = document.querySelector(".home")

const project_section = document.querySelector(".project")

const about_section = document.querySelector(".about")

const skill_section = document.querySelector(".skill")

const education_section = document.querySelector(".edu_exp")

const contact_section = document.querySelector(".contact")


const homeLink = document.getElementById('homeLink')
const aboutLink = document.getElementById('aboutLink')
const projectLink = document.getElementById('projectLink')
const skillLink = document.getElementById('skillLink')
const eduLink = document.getElementById('eduLink')
const contactLink = document.getElementById('contactLink')


homeLink.addEventListener('click', function() {
    project_section.style.display = "none"
    about_section.style.display = "none"
    home_section.style.display = "block"
    contact_section.style.display = "none"
    skill_section.style.display = "none"
    education_section.style.display = "none"
});

projectLink.addEventListener('click', function() {
    project_section.style.display = "block"
    about_section.style.display = "none"
    home_section.style.display = "none"
    contact_section.style.display = "none"
    skill_section.style.display = "none"
    education_section.style.display = "none"
});

aboutLink.addEventListener('click', function() {
    project_section.style.display = "none"
    about_section.style.display = "block"
    home_section.style.display = "none"
    contact_section.style.display = "none"
    skill_section.style.display = "none"
    education_section.style.display = "none"
});

contactLink.addEventListener('click', function() {
    project_section.style.display = "none"
    about_section.style.display = "none"
    home_section.style.display = "none"
    contact_section.style.display = "block"
    skill_section.style.display = "none"
    education_section.style.display = "none"
});

skillLink.addEventListener('click', function() {
    project_section.style.display = "none"
    about_section.style.display = "none"
    home_section.style.display = "none"
    contact_section.style.display = "none"
    skill_section.style.display = "block"
    education_section.style.display = "none"
});

eduLink.addEventListener('click', function() {
    project_section.style.display = "none"
    about_section.style.display = "none"
    home_section.style.display = "none"
    contact_section.style.display = "none"
    skill_section.style.display = "none"
    education_section.style.display = "block"
});