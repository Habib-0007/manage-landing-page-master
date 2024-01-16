var menuBtn = document.querySelector("header i");
var navDropdown = document.querySelector("header .nav-dropdown");

const toggleNav = () => {
	navDropdown.classList.toggle("show");

	if (menuBtn.classList.contains("fa-bars")) {
		menuBtn.classList.remove("fa-bars");
		menuBtn.classList.add("fa-multiply");
	} else {
		menuBtn.classList.remove("fa-multiply");
		menuBtn.classList.add("fa-bars");
	}
	document.body.style.backgroundColor = "#ccc";
};

menuBtn.addEventListener("click", toggleNav);
