const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
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