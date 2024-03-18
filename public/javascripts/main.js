var slider=document.querySelector(".swiper")
var icon = document.querySelector("#nav i")
var dikhega= document.querySelector("#nav #option")
var flag=0;
icon.addEventListener("click",function(){
if(flag==0){
    page.style.width='80%'
    icon.style.backgroundColor='gray'
    icon.style.borderRadius='10px'
    dikhega.style.display='inherit'
    slider.style.width='100%'
    slider.style.marginLeft='-1%'
    flag=1
    
}
else{
    icon.style.backgroundColor='transparent'
    dikhega.style.display='none'
    page.style.width='100%'
    flag=0
}
})