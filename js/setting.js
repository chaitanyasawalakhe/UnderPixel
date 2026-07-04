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
const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0.3;

// Saved state
const musicState = localStorage.getItem("music");

if (musicState === "off") {

    musicToggle.checked = false;

} else {

    musicToggle.checked = true;

    document.addEventListener("click", () => {
        bgMusic.play();
    }, { once: true });

}

// Switch
musicToggle.addEventListener("change", () => {

    if (musicToggle.checked) {

        localStorage.setItem("music", "on");
        bgMusic.play();

    } else {

        localStorage.setItem("music", "off");
        bgMusic.pause();

    }

});