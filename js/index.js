//Navbar buttons
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");
var navLink = navbarLinks.getElementsByClassName("navlink");

toggleButton.onclick = function () {
	navbarLinks.classList.toggle("active");
	document.body.classList.toggle("nav-open");
};

for (var i = 0; i < navLink.length; i++) {
	navLink[i].onclick = function () {
		navbarLinks.classList.remove("active");
		document.body.classList.remove("nav-open");
	};
}

//dark mode
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
//function for enabling and disabling dark mode
const enableDarkMode = function () {
	document.body.classList.add("darkmode");
	localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = function () {
	document.body.classList.remove("darkmode");
	localStorage.setItem("darkMode", null);
};
// If the user already visited and enabled darkMode
if (darkMode === "enabled") {
	enableDarkMode();
}
// When someone clicks the button
darkModeToggle.onclick = function () {
	darkMode = localStorage.getItem("darkMode");

	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
};

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
