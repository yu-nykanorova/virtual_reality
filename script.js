function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
}

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("year").textContent = new Date().getFullYear();
});

const headerNav = document.querySelector("#headerUl");
const cont = document.querySelector("#container");

cont.addEventListener("click", function(event) {
	const withinNav = event.composedPath().includes(headerNav);
	if (!withinNav) {
		headerNav.classList.remove("_active");
	};
});
