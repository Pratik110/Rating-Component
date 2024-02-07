let starContainer = document.querySelector(".star-container");
let allStars = document.querySelectorAll(".star");
let rating = document.querySelector("h3");

starContainer.addEventListener("click",function(e){
    console.log(e);
    console.log(e.target.dataset.pos);
    let currentSelected = e.target.dataset.pos;
    for (let i = 0; i < allStars.length; i++){
        allStars[i].classList.remove("gold");
    }
    for (let i = 0; i < currentSelected; i++){
        allStars[i].classList.add("gold");
    }
    rating.innerText = "Rating : "+ currentSelected;

})

starContainer.addEventListener("mouseover",function(e){
    let currentSelected = e.target.dataset.pos;
    for (let i = 0; i < allStars.length; i++){
        allStars[i].classList.remove("gold");
    }
    for (let i = 0; i < currentSelected; i++){
        allStars[i].classList.add("gold");
    }
})