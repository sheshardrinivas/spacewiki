const outline = document.querySelector("[data-cursor-outline]");
const dot = document.querySelector("[data-cursor-dot]");
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


gsap.fromTo(".loading-page",{opacity:1,scale:1},{opacity:0,duration:2,linear:true,delay:1,y:500});
gsap.fromTo(".name",{opacity:1,scale:1},{opacity:0,duration:2,linear:true,delay:1,y:500 });
gsap.fromTo(".name1",{opacity:1,scale:1},{opacity:0,duration:2,linear:true,delay:1,y:500 });

