const outline = document.querySelector("[data-cursor-outline]");
const dot = document.querySelector("[data-cursor-dot]");
const side_=document.querySelector(".side-dash");
const button=document.querySelector("#btn");
const button1=document.querySelector(".btn1");
const page = document.querySelector(".main");
const txt=document.querySelector("#h5");
const txt1=document.querySelector("#h0");
const txt2=document.querySelector("#h1");

const page1 = document.querySelector(".page1info");
const img=document.querySelector("#github");
const sound=document.querySelector("#audio")


setTimeout("page1.animate({ backgroundColor:'rgba(0, 0, 0,0)',}, { duration: 2000, fill: 'forwards' }),img.animate({ opacity: 0}, { duration: 2000, fill: 'forwards' })",sound.pause(),2000)
setTimeout(() => {sound.play();},2010);
button1.addEventListener("click",function(){
       window.open("https://github.com/sheshardrinivas/spacewiki");
});
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
    button1.animate({ 
        opacity:1
    }, { duration: 5000, fill: "forwards" });
    txt.animate({ 
        opacity:1
    }, { duration: 5000, fill: "forwards" });
    txt1.animate({ 
        opacity:1
    }, { duration: 5000, fill: "forwards" });
    mode=true;
    txt2.animate({ 
        opacity:1
    }, { duration: 5000, fill: "forwards" });


}
side_.addEventListener("click",function() {

    side_.animate({ 
        width:"0px"
    }, { duration: 1600, fill: "forwards" });
    button.animate({ 
        opacity:1
    }, { duration: 1500, fill: "forwards" });
    button1.animate({ 
        opacity:0
        
    }, { duration: 1400, fill: "forwards" });
    txt.animate({ 
        opacity:0
    }, { duration: 1400, fill: "forwards" });
    txt1.animate({ 
        opacity:0
    }, { duration: 1400, fill: "forwards" });
    txt2.animate({ 
        opacity:0
    }, { duration: 1400, fill: "forwards" });
    

})
