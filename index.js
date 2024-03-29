const photo_1 = document.getElementById("photo_1");
const photo_2 = document.getElementById("photo_2");
const photo_3 = document.getElementById("photo_3");
const photo_4 = document.getElementById("photo_4");
const header = document.getElementById("head_style");
const photos = document.getElementById("photos_up");
const body_1 = document.getElementById("body_1");

photo_1.addEventListener("click", (e)=>{
    header.style.display = "none";
    photos.style.display = "flex";
    photos.innerHTML = `<div id="info_work">
    <img src="img/137.png" alt="">
    <p>HX5 headphones (belong to a company).</p>
    </div>`
    body_1.style.overflowY = "hidden";
})
photo_2.addEventListener("click", (e)=>{
    header.style.display = "none";
    photos.style.display = "flex";
    photos.innerHTML = `<div id="info_work">
    <img src="img/advanced_animation.110.png" alt="">
    <p>Caller ID support for landline phones.</p>
    </div>`
    body_1.style.overflowY = "hidden";
})
photo_3.addEventListener("click", (e)=>{
    header.style.display = "none";
    photos.style.display = "flex";
    photos.innerHTML = `<div id="info_work">
    <img src="img/advanced_animation.116.png" alt="">
    <p>Toy souvenir. Order by TRANSPORTE DIEJUAN S.A.</p>
    </div>`
    body_1.style.overflowY = "hidden";
})
photo_4.addEventListener("click", (e)=>{
    header.style.display = "none";
    photos.style.display = "flex";
    photos.innerHTML = `<div id="info_work">
    <img src="img/advanced_animation.138.png" alt="">
    <p>TIGER sneakers (belong to a company).</p>
    </div>`
    body_1.style.overflowY = "hidden";
})
photos.addEventListener("click", (e)=>{
    header.style.display = "flex";
    photos.style.display = "none";
    body_1.style.overflowY = "scroll";
})