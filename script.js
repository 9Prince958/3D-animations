const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


gsap.from(" #nav",{
  y:-10,
  duration:.5,
  stagger:.1,
  opacity:0,
  
})

gsap.from(".part",{
  y:30,
  opacity:0,
  stagger:0.2,
  duration:0.7,
})



Shery.textAnimate(" #part2 #text h1" , {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});


Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageEffect("#part1 .part1img", {
  style: 2, 
 });
 
Shery.imageEffect("#part2 img", {
  style: 2, 
 });

 Shery.imageEffect("#page3 .container img", {
  style: 2, 
 });
 Shery.imageEffect("#page4 img",{
  style:2,
  gooey:true,
})


 document.querySelector("#page5 button").addEventListener("mouseover", function(){
 gsap.to("#page5 video",{
  opacity:1,
  duration:1,

 })
 })

 document.querySelector("#page5 button").addEventListener("mouseleave", function(){
  gsap.to("#page5 video",{
   opacity:0,
   duration:0.5,
   
  })
  })

  gsap.from("#page2",{
    y:"50",
    stagger:0.2,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
      scroller:"body",
      trigger:"#page2",
      start:"top 50%",
      end:"top 55%",
      scrub:2,
      

    }
   
   
     })
 
