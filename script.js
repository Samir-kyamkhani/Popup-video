const closeBtn = document.querySelector(".ri-close-circle-fill");
const watchBtn = document.querySelector(".btn");
const videoEl = document.querySelector("video");
const trailerEl = document.querySelector(".trailer-container");


watchBtn.addEventListener("click", function(){
    trailerEl.classList.remove('active')
})

closeBtn.addEventListener("click",() =>{
    trailerEl.classList.add('active')
    videoEl.pause();
    videoEl.currentTime = 0;
    
})