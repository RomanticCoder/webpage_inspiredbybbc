const toOne = document.querySelector(".toOne");
const toTwo = document.querySelector(".toTwo");

toOne.addEventListener("click",()=>{
    const img = document.querySelector(".bg");
    img.style.transform = 'translateX(-500px)';
})

toTwo.addEventListener("click",()=>{
    const img = document.querySelector(".bg");
    img.style.transform = 'translateX(500px)';
})