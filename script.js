document.addEventListener("DOMContentLoaded", function() {
	// main nav
	document.getElementById("menu-open").addEventListener("click", function() {
		document.getElementById("menu").classList.add("open")
	})
	document.getElementById("menu-close").addEventListener("click", function() {
		document.getElementById("menu").classList.remove("open")
	})
})