

const outline = document.querySelector("[data-cursor-outline]");
const dot = document.querySelector("[data-cursor-dot]");
gsap.fromTO(outline,{x:500,y:200})
gsap.fromTO(dot,{x:500,y:200})
const page = document.querySelector(".page");
page.addEventListener("mousemove", function(data) {
    console.log("Mouse moved:", data.clientX, data.clientY);
    const x = data.clientX;
    const y = data.clientY;
    outline.animate({
        left: x + "px",
        top: y + "px"
    }, { duration: 550, fill: "forwards" });
    dot.animate({ 
        left: x + "px",
        top: y + "px"
    }, { duration: 600, fill: "forwards" });
});
function git() {
    window.open("https://github.com/sheshardrinivas/spacewiki");
}
