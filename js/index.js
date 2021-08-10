//Navbar buttons
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");
const navLink0 = document.getElementsByClassName("navlink")[0];
const navLink1 = document.getElementsByClassName("navlink")[1];
const navLink2 = document.getElementsByClassName("navlink")[2];
const navLink3 = document.getElementsByClassName("navlink")[3];

toggleButton.addEventListener("click", () => {
	navbarLinks.classList.toggle("active");
	document.body.classList.toggle("nav-open");
});
navLink0.addEventListener("click", () => {
	navbarLinks.classList.remove("active");
	document.body.classList.remove("nav-open");
});
navLink1.addEventListener("click", () => {
	navbarLinks.classList.remove("active");
	document.body.classList.remove("nav-open");
});
navLink2.addEventListener("click", () => {
	navbarLinks.classList.remove("active");
	document.body.classList.remove("nav-open");
});
navLink3.addEventListener("click", () => {
	navbarLinks.classList.remove("active");
	document.body.classList.remove("nav-open");
});

//dark mode
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const enableDarkMode = () => {
	document.body.classList.add("darkmode");
	localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
	document.body.classList.remove("darkmode");
	localStorage.setItem("darkMode", null);
};
// If the user already visited and enabled darkMode
if (darkMode === "enabled") {
	enableDarkMode();
}
// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");

	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});

//Contact Me
function validate() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");

	error_message.style.padding = "10px";

	var text;
	if (name.length < 3) {
		text = "Please Enter valid Name";
		error_message.innerHTML = text;
		return false;
	}
	if (email.indexOf("@") == -1 || email.length < 6) {
		text = "Please Enter valid Email";
		error_message.innerHTML = text;
		return false;
	}
	if (message.length <= 5) {
		text = "Please Enter More Than 5 Characters";
		error_message.innerHTML = text;
		return false;
	}
	alert("Form Submitted Successfully!");
	return true;
}
