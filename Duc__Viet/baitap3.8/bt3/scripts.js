var mainImage = document.querySelector(".img-main");
var imgGallery = document.querySelectorAll(".img-thumb");
function changeImage() {
    imgGallery.forEach(element => {
        element.addEventListener("click", function() {
            mainImage.src = element.src;
        });
        
    });
    
}
changeImage();