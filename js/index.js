//menu-button
const navToggle = document.querySelector('.toggle-button');
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const navlink0 = document.getElementsByClassName('navlink0')[0]
const navlink1 = document.getElementsByClassName('navlink1')[0]
const navlink2 = document.getElementsByClassName('navlink2')[0]
const navlink3 = document.getElementsByClassName('navlink3')[0]
const navlink4 = document.getElementsByClassName('navlink4')[0]
const navlink5 = document.getElementsByClassName('navlink5')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

navlink0.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  document.body.classList.remove('nav-open');
})
navlink1.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  document.body.classList.remove('nav-open');
})
navlink2.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  document.body.classList.remove('nav-open');
})
navlink3.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  document.body.classList.remove('nav-open');
})
navlink4.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  document.body.classList.remove('nav-open');
})
navlink5.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  document.body.classList.remove('nav-open');
})


//dark mode
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});


//Contact Me
function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 5){
      text = "Please Enter More Than 5 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }