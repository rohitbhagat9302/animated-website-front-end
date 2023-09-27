var crsr = document.getElementById("cursor")
var crsr_blur = document.getElementById("cursor-blur")
document.addEventListener("mousemove", function(dets){
   crsr.style.left = dets.x + "px"
   crsr.style.top = dets.y + "px"
   crsr_blur.style.left = dets.x - 74.5 + "px"
   crsr_blur.style.top = dets.y - 74.5 + "px"
})


const h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })
})
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "1px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
})


gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    height:"90px",

    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        // markers: true,
        start: "top -10%",
        end:"top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger: {
        trigger:"#main",
        scroller:"body",
        start:"top -50%",
        end:"-80%",
        // markers: true,
        scrub:4
    }
})

gsap.from("#about-us  img, #about-us-paragraph" ,{
    y: 90,
    opacity: 0,
    duration:1,
    scrollTrigger: {
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        // markers: true,
        scrub:4
    }
})

// To make card-container scorllable
// gsap.from("#card-container .cards" ,{
//     y: 90,
//     // opacity: 0,
//     duration:1,
//     scrollTrigger: {
//         trigger:"#card-container",
//         scroller:"body",
//         start:"top 70%",
//         end:"top 65%",
//         // markers: true,
//         scrub:1
//     }
// })

gsap.from("#quotesdiv #colen1", {
    y: -50,
    x: -50,
    scrollTrigger: {
        trigger: "#colen1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub:4
    },
})
gsap.from("#quotesdiv #colen2", {
    y: 50,
    x: 50,
    scrollTrigger: {
      trigger: "#colen1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

gsap.from("#content", {
    y: 90,
    scrollTrigger: {
      trigger: "#colen1",
      scroller: "body",
      // markers:true,
      start: "top 25%",
      end: "top 25%",
      scrub: 1,
    },
  });