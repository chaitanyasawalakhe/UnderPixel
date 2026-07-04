const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){
    document.body.classList.add("light-mode");
}

const wallpapers = [
    "images/bg.1.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg",
    "images/bg4.jpg",
    "images/bg5.jpg",
    "images/bg6.jpg"
];

let current = 0;

const hero = document.querySelector(".hero");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


function changeWallpaper(){

    hero.style.backgroundImage = `url(${wallpapers[current]})`;

    dots.forEach(dot => dot.classList.remove("active"));

    dots[current].classList.add("active");

}

function nextWallpaper(){

    current++;

    if(current >= wallpapers.length){
        current = 0;
    }

    changeWallpaper();

}
function prevWallpaper(){
    current --;
    if(current<0){
        current = wallpapers.length - 1;
    }

    changeWallpaper();
    
}


changeWallpaper();

prev.addEventListener("click", prevWallpaper);
next.addEventListener("click", nextWallpaper);


setInterval(nextWallpaper,3000);
