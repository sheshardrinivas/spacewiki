const outline=document.querySelector("[data-cursor-outline]");
const dot=document.querySelector("[data-cursor-dot]");
const page=document.querySelector(".page")
page.addEventListener("mousemove",function(data){
    const x=data.clientX;
    const y=data.clientY;
    //dot.style.left=x+"px"
    //dot.style.top=y+"px"
    //outline.style.left=x+"px"
    //outline.style.top=y+"px"
    outline.animate({
      left:x+"px",
      top:y+"px"

    },{duration:600,fill:"forwards"});
    dot.animate({
        left:x+"px",
        top:y+"px"
  
      },{duration:500,fill:"forwards"});
})
function git(){
    window.open("https://github.com/sheshardrinivas/spacewiki");
}