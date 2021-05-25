document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-open").addEventListener("click", function() {
        document.getElementById("menu").classList.add("open");
    });
    document.getElementById("menu-close").addEventListener("click", function() {
        document.getElementById("menu").classList.remove("open");
    });
});