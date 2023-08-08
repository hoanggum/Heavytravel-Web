var bgImg= document.getElementById("container_slideshow");
var imgArray =["url(asess/image/HaLongBay.jpg)","url(asess/image/Taynguyen.jpg)","url(asess/image/NinhBinh.jpg)","url(asess/image/PhuQuocday.jpg)","url(asess/image/NhaTrang.jpg)","url(asess/image/DaLab.jpg)"];
var i = 0;
function prev(){
    i--;
    if(i < 0)
    i = imgArray.length;
    
    bgImg.style.backgroundImage = imgArray[i];
}
function next(){
    i++;
    if(i == imgArray.length)
    i = 0;
    
    bgImg.style.backgroundImage = imgArray[i];

}
function auto_SlideShow(){
    i++;
    if(i == imgArray.length)
    i = 0;
    
    bgImg.style.backgroundImage = imgArray[i];
    
}
setInterval(auto_SlideShow,3000);

const productRecomend = document.querySelector('.form-recomend');

const recomendWidth = productRecomend.offsetWidth;

document.getElementById('next1').onclick = function(){
    productRecomend.scrollLeft += recomendWidth;

}
document.getElementById('prev1').onclick = function(){
    productRecomend.scrollLeft -= recomendWidth;

}