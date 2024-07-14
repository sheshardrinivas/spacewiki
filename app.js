const outline = document.querySelector("[data-cursor-outline]");
const dot = document.querySelector("[data-cursor-dot]");
const side_=document.querySelector(".side-dash");
const button=document.querySelector("#btn");
const page = document.querySelector(".main");
const mode=false;
page.addEventListener("mousemove", function(data) {
    console.log("Mouse moved:", data.clientX, data.clientY);
    const x = data.clientX;
    const y = data.clientY;
    outline.animate({
        left: x + "px",
        top: y + "px"
    }, { duration: 1300, fill: "forwards" });
    dot.animate({ 
        left: x + "px",
        top: y + "px"
    }, { duration: 1500, fill: "forwards" });
});
function side(){
    side_.animate({ 
        width:"20rem"
    }, { duration: 1000, fill: "forwards" });
    button.animate({ 
        opacity:0
    }, { duration: 1000, fill: "forwards" });
    

}
page.addEventListener("mousedown",function() {

    side_.animate({ 
        width:"20rem"
    }, { duration: 1000, fill: "backwards" });
    button.animate({ 
        opacity:0
    }, { duration: 1000, fill: "backwards" });
})