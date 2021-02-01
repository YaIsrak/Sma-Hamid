// Variable
var navbar = document.getElementById("navbar");
var about = document.getElementById("about");
var skill = document.getElementById("skill");
var curriculum = document.getElementById("curriculum");
var button = document.getElementById("dark-btn");

// Function Of Dark Theme
function darkmode(){
    // navbar
    navbar.classList.toggle("bg-dark");
    navbar.classList.toggle("navbar-dark");
    document.getElementById("d-m").classList.toggle("bg-dark");
    document.getElementById("d-i").classList.toggle("text-white");
    // about
    about.classList.toggle("bg-dark");
    about.classList.toggle("text-white");
    // Skill
    skill.classList.toggle("bg-dark");
    skill.classList.toggle("text-white");

    // Button
    if(button.innerHTML == "Dark"){
        button.innerHTML = "Light";
    }else{
        button.innerHTML = "Dark";
    }
}
