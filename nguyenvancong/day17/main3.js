// biaf 3
const p_img = document.querySelectorAll("p img");
console.log(p_img);

p_img.forEach((img)=>{
    console.log(img);
    img.addEventListener('click',function(){
          changeImage(img.src)
    })
})

function changeImage(imgPath){
    document.getElementById('img-main').src = imgPath
}
