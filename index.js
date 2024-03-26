const photo_1 = document.getElementById("photo_1");
const photo_2 = document.getElementById("photo_2");
const photo_3 = document.getElementById("photo_3");
const photo_4 = document.getElementById("photo_4");

const photo_1_1 = document.getElementById("photo_1_1");
const photo_1_2 = document.getElementById("photo_1_2");
const photo_1_3 = document.getElementById("photo_1_3");
const photo_1_4 = document.getElementById("photo_1_4");

const photos = document.getElementById("photos_up");
const body_1 = document.getElementById("body_1");


/*photo_1_1.style.maxWidth = "1500px";
photo_1_1.style.display = "none";

photo_1_2.style.width = "1500px";
photo_1_2.style.position = "relative";
photo_1_2.style.top = "-845px";
photo_1_2.style.display = "none";

photo_1_3.style.width = "1500px";
photo_1_3.style.position = "relative";
photo_1_3.style.top = "-1690px";
photo_1_3.style.display = "none";

photo_1_4.style.width = "1500px";
photo_1_4.style.position = "relative";
photo_1_4.style.top = "-2535px";
photo_1_4.style.display = "none";

photos.style.display = "flex";
photos.style.flexDirection = "column";
photos.style.alignItems = "center";
photos.style.position = "relative";
photos.style.top = "-3020px";*/


photo_1.addEventListener("click", (e)=>{
    photos.style.display = "flex";
    photos.innerHTML = `<div id="info_work">
    <img src="img/137.png" alt="">
    <p>HX5 headphones (they belong to a company).</p>
    </div>`
    body_1.style.overflowY = "hidden";
})
photo_2.addEventListener("click", (e)=>{
    photos.style.display = "flex";
    photos.innerHTML = `<div id="info_work">
    <img src="img/advanced_animation.110.png" alt="">
    <p>Caller ID support for landline phones.</p>
    </div>`
    body_1.style.overflowY = "hidden";
})
photo_3.addEventListener("click", (e)=>{
    photos.style.display = "flex";
    photos.innerHTML = `<div id="info_work">
    <img src="img/advanced_animation.116.png" alt="">
    <p>Toy souvenir. Order by TRANSPORTE DIEJUAN S.A.</p>
    </div>`
    body_1.style.overflowY = "hidden";
})
photo_4.addEventListener("click", (e)=>{
    photos.style.display = "flex";
    photos.innerHTML = `<div id="info_work">
    <img src="img/advanced_animation.138.png" alt="">
    <p>TIGER sneakers (they belong to a company).</p>
    </div>`
    body_1.style.overflowY = "hidden";
})
photos.addEventListener("click", (e)=>{
    photos.style.display = "none";
    body_1.style.overflowY = "scroll";
})


/*photo_1_2.addEventListener("click", (e)=>{
    photo_1_1.style.display = "none";
    photo_1_2.style.display = "none";
    //body_1.style.overflowY = "scroll";
})

photo_3.addEventListener("click", (e)=>{
    photo_1_1.style.display = "block";
    photo_1_2.style.display = "block";
    photo_1_3.style.display = "block";
    photo_1_3.style.cursor = "pointer";
    //body_1.style.overflowY = "hidden";
})
photo_1_3.addEventListener("click", (e)=>{
    photo_1_1.style.display = "none";
    photo_1_2.style.display = "none";
    photo_1_3.style.display = "none";
    //body_1.style.overflowY = "scroll";
})

photo_4.addEventListener("click", (e)=>{
    photo_1_1.style.display = "block";
    photo_1_2.style.display = "block";
    photo_1_3.style.display = "block";
    photo_1_4.style.display = "block";
    photo_1_4.style.cursor = "pointer";
    //body_1.style.overflowY = "hidden";
})
photo_1_4.addEventListener("click", (e)=>{
    photo_1_1.style.display = "none";
    photo_1_2.style.display = "none";
    photo_1_3.style.display = "none";
    photo_1_4.style.display = "none";
    //body_1.style.overflowY = "scroll";
})*/