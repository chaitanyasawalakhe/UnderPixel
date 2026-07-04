const themeToggle = document.getElementById("themeToggle");

// Page load hone par saved theme check karo
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.checked = false;
} else {
    document.body.classList.remove("light-mode");
    themeToggle.checked = true;
}

// Switch change
themeToggle.addEventListener("change", () => {

    if (themeToggle.checked) {

        document.body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");

    } else {

        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light");

    }

});