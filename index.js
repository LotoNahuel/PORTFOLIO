const photo_1 = document.getElementById("photo_1");
const photo_2 = document.getElementById("photo_2");
const photo_3 = document.getElementById("photo_3");
const photo_4 = document.getElementById("photo_4");
const header = document.getElementById("head_style");
const photos = document.getElementById("photos_up");
const body_1 = document.getElementById("body_1");
const about = document.getElementById("right-h2");
const work = document.getElementById("left-h2");

photo_1.addEventListener("click", (e)=>{
    header.style.display = "none";
    photos.style.display = "flex";
    photos.innerHTML = `<div id="info_work">
    <img src="img/137.png" alt="">
    <p>HX5 headphones.</p>
    </div>`
    body_1.style.overflowY = "hidden";
})
photo_2.addEventListener("click", (e)=>{
    header.style.display = "none";
    photos.style.display = "flex";
    photos.innerHTML = `<div id="info_work">
    <img src="img/r_dragon.png" alt="">
    <p>Dragon.</p>
    </div>`
    body_1.style.overflowY = "hidden";
})
photo_3.addEventListener("click", (e)=>{
    header.style.display = "none";
    photos.style.display = "flex";
    photos.innerHTML = `<div id="info_work">
    <img src="img/sin_nombre_9.png" alt="">
    <p>Maria.</p>
    </div>`
    body_1.style.overflowY = "hidden";
})
photo_4.addEventListener("click", (e)=>{
    header.style.display = "none";
    photos.style.display = "flex";
    photos.innerHTML = `<div id="info_work">
    <img src="img/advanced_animation.138.png" alt="">
    <p>TIGER sneakers.</p>
    </div>`
    body_1.style.overflowY = "hidden";
})
photos.addEventListener("click", (e)=>{
    header.style.display = "flex";
    photos.style.display = "none";
    body_1.style.overflowY = "scroll";
})

document.addEventListener("DOMContentLoaded", function() {
    about.addEventListener("click", (e)=> {
        about.classList.add("scale")
        document.getElementById("redirect_1").scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            about.classList.remove("scale");
        }, 500);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    work.addEventListener("click", (e)=> {
        work.classList.add("scale")
        document.getElementById("redirect_2").scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            work.classList.remove("scale");
        }, 500);
    });
});