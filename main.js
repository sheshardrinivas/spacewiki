//const outline=document.querySelector("[data-cursor-outline]");
//const dot=document.querySelector("[data-cursor-dot]");
//const page=document.querySelector(".page")
//page.addEventListener("mousemove",function(data){
//    const x=data.clientX;
//    const y=data.clientY;
//
//    outline.animate({
//      left:x+"px",
//      top:y+"px"
//
//    },{duration:600,fill:"forwards"});
//    dot.animate({
//        left:x+"px",
//        top:y+"px"
//  
//      },{duration:500,fill:"forwards"});
//})
//function git(){
//    window.open("https://github.com/sheshardrinivas/spacewiki");
//}

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
            }, { duration: 600, fill: "forwards" });
            dot.animate({
                left: x + "px",
                top: y + "px"
            }, { duration: 10, fill: "forwards" });
        });
   

        function git() {
            window.open("https://github.com/sheshardrinivas/spacewiki");
        }