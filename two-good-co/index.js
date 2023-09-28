function videoconanimation(){
    const videocon = document.querySelector("#video-container")
    const playbtn = document.querySelector("#play")

    videocon.addEventListener("mouseenter" ,function(){
        gsap.to(playbtn,{
            opacity: 1,
            scale:1
        });
    });
    videocon.addEventListener("mouseleave" ,function(){
        gsap.to(playbtn,{
            opacity: 0,
            scale:0
        });
    });

    document.addEventListener("mousemove", function(dets){
        gsap.to(playbtn,{
            left: dets.x - 50,
            top: dets.y - 50
        })
    })

}

videoconanimation()

function loadinganimation() {
    gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#page1 #video-container", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });
  }
  loadinganimation();