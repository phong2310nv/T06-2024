const changeColorButton = document.querySelectorAll(".changeColor");
const para = document.querySelector(".desc");
function changeColor(event){
    const color = event.target.id.replace("color","").toLowerCase();
    para.style.color=color;
}
changeColorButton.forEach(button=> {
    button.addEventListener("click",changeColor);
    
});
