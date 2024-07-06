const pointer=document.querySelector("#pointer");
const page=document.querySelector(".container");
page.addEventListener("mousemove",function(data){
    gsap.to(pointer,{
        x:data.x,
        y:data.y
    })
})
function git(){
    window.open("https://github.com/sheshardrinivas/spacewiki");
}