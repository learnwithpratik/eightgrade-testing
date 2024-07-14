var crsr = document.querySelector("#cursor");
var crsrblr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
    crsrblr.style.left = dets.x-100+"px"
    crsrblr.style.top = dets.y-100+"px"

})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
   })
   elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1;
    crsr.style.border = "0px solid yellow";
    crsr.style.backgroundColor = "yellow";
   })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"80px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    },
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -50%",
        end:"top -100%",
        scrub:1
    },
})

gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:1
    },
})
gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    },
})

gsap.from("#colon1",{
    y:-50,
    x:-50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    },
})
gsap.from("#colon2",{
    y:50,
    x:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    },
})
gsap.from("#page4 h1",{
    y: -20,
    scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 2,
  },
})