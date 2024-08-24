const btn = document.querySelectorAll("button")
console.log(btn);

btn.forEach((button)=>{
 button.addEventListener('click', function(){
    changeColor(button.getAttribute("data-color"));
    
 })
})
function changeColor(color){
   const p = document.getElementById("p");
   console.log(color);
    if(color == 'red'){
        p.style.color = "red"
    }
    else if(color == 'blue'){
        p.style.color = "blue"
    }
    else if(color == 'green'){
        p.style.color = "green"
    }
    else{
        p.style.color = "gold"
    }

   p.className = "";
   p.classList.add(color)
   
} 