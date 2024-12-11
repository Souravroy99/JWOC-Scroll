gsap.registerPlugin(ScrollTrigger);
    
const line = document.querySelector(".theLine");
const pathLength = line.getTotalLength();

line.style.strokeDasharray = pathLength;
line.style.strokeDashoffset = pathLength;

gsap.to(line, {
  strokeDashoffset: 0,
  scrollTrigger: {
    trigger: ".line-container",
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
  },
  ease: "none",
});

gsap.to(".ball01", {
  scrollTrigger: {
    trigger: ".line-container",
    start: "top 20%",
    end: "top 30%",
    scrub: true,
    markers: false,
  },
  x: 0,
  y: 0,
});

gsap.to(".ball02", {
  scrollTrigger: {
    trigger: ".line-container",
    start: "top 30%",
    end: "top 40%",
    scrub: true,
    markers: false,
  },
  x: 0,
  y: 0,
});

gsap.to(".ball03", {
  scrollTrigger: {
    trigger: ".line-container",
    start: "top 40%",
    end: "top 50%",
    scrub: true,
    markers: false,
  },
  x: 0,
  y: 0,
});

gsap.to(".ball04", {
  scrollTrigger: {
    trigger: ".line-container",
    start: "top 50%",
    end: "top 60%",
    scrub: true,
    markers: false,
  },
  x: 0,
  y: 0,
});

gsap.to(".ball05", {
  scrollTrigger: {
    trigger: ".line-container",
    start: "top 60%",
    end: "top 70%",
    scrub: true,
    markers: false,
  },
  x: 0,
  y: 0,
});

gsap.to(".ball06", {
  scrollTrigger: {
    trigger: ".line-container",
    start: "top 70%",
    end: "top 80%",
    scrub: true,
    markers: false,
  },
  x: 0,
  y: 0,
});

gsap.to(".ball07", {
  scrollTrigger: {
    trigger: ".line-container",
    start: "top 80%",
    end: "top 90%",
    scrub: true,
    markers: false,
  },
  x: 0,
  y: 0,
});

gsap.to(".ball08", {
  scrollTrigger: {
    trigger: ".line-container",
    start: "top 90%",
    end: "top 100%",
    scrub: true,
    markers: false,
  },
  x: 0,
  y: 0,
});