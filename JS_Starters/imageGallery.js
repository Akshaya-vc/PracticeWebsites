const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('.imgGallery button');
const overlay = document.querySelector('.imgGallery .overlay');
let images = thumbBar.children

/* Looping through images */
for(let i = 1; i<=5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    thumbBar.appendChild(newImage);
    let el = images[i-1];
    el.onclick = function(){
        displayedImage.setAttribute('src',`images/pic${Number(i)}.jpg`)
    }
    console.log(i)
}
//toggle function
/* Wiring up the Darken/Lighten button */
function toggleBright(){
    if(btn.getAttribute('class')==='dark'){
        btn.setAttribute('class','light');
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
        btn.innerHTML = "Darken"
    }
    else{
        btn.setAttribute('class','dark');
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
        btn.innerHTML = "Lighten"
    }
}
btn.addEventListener("click", toggleBright);