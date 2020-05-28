const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const dropDown = document.querySelectorAll('.dropdown-item');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

dropDown.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

//theme
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

//memory to hold theme while refresh
const theme = localStorage.getItem('theme');

if(theme){
    body.classList.add(theme);
}

//theme button handler
darkButton.onclick = () => {
 body.classList.replace('light','dark') ||  body.classList.replace('solar','dark');
 localStorage.setItem('theme','dark');
};

lightButton.onclick = () => {
 body.classList.replace('dark','light') ||  body.classList.replace('solar','light') ;
 localStorage.setItem('theme','light');
};

solarButton.onclick = () => {
    body.classList.replace('light','solar') || body.classList.replace('dark','solar');
    localStorage.setItem('theme','solar');
};

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
    if(message.length <= 10){
      text = "Please Enter More Than 10 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }