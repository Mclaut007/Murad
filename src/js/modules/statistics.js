function animateStatistisNumbers() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".statistics__number span", {
    scrollTrigger: {
      trigger: ".statistics__items",
      start: "bottom bottom",
    },
    innerText: 0,
    snap: { innerText: 1 },
    duration: 3,
  });
}

export default animateStatistisNumbers;
