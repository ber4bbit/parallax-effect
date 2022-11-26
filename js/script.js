window.addEventListener('scroll', () => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.gsap-wrapper',
    content: '.gsap-content'
});

const parentElem = document.querySelector('.header');
const boatElem = document.querySelector('.layers__layer_boat');
const birdsElem = document.querySelector('.layers__layer_birds');
const animationSpeed = 0.05;
const boatRatio = 40;
const birdsRatio = 10;

let posX = 0, posY = 0;
let coordsXPercent = 0, coordsYPercent = 0;

const setSnowAnimationByMouse = () => {
    const distanceX = coordsXPercent - posX;
    const distanceY = coordsYPercent - posY;

    posX = posX + (distanceX * animationSpeed);
    posY = posY + (distanceY * animationSpeed);

    boatElem.style.cssText = `transform: translate(${posX / boatRatio}%, ${posY / boatRatio}%)`;
    birdsElem.style.cssText = `transform: translate(${posX / birdsRatio}%, ${posY / birdsRatio}%)`;

    requestAnimationFrame(setSnowAnimationByMouse);
}

setSnowAnimationByMouse();

parentElem.addEventListener('mousemove', event => {
    const parentWidth = parentElem.offsetWidth;
    const parentHeight = parentElem.offsetHeight;

    const coordX = event.pageX - parentWidth / 2;
    const coordY = event.pageY - parentWidth / 2;

    coordsXPercent = coordX / parentWidth * 100;
    coordsYPercent = coordY / parentHeight * 100;
})