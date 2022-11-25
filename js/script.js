window.addEventListener('scroll', () => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.gsap-wrapper',
    content: '.gsap-content'
});

const parentElem = document.querySelector('.header');
const snowElem = document.querySelector('.layers__layer_snow');
const animationSpeed = 0.05;
const snowRatio = 20;

let posX = 0, posY = 0;
let coordsXPercent = 0, coordsYPercent = 0;

const setSnowAnimationByMouse = () => {
    console.log('snow');
    const distanceX = coordsXPercent - posX;
    const distanceY = coordsYPercent - posY;

    posX = posX + (distanceX * animationSpeed);
    posY = posY + (distanceY * animationSpeed);

    snowElem.style.cssText = `transform: translate(${posX / snowRatio}%, ${posY / snowRatio}%)`;

    requestAnimationFrame(setSnowAnimationByMouse);
}

setSnowAnimationByMouse();

parentElem.addEventListener('mousemove', event => {
    console.log('snow');
    const parentWidth = parentElem.offsetWidth;
    const parentHeight = parentElem.offsetHeight;

    const coordX = event.pageX - parentWidth / 2;
    const coordY = event.pageY - parentWidth / 2;

    coordsXPercent = coordX / parentWidth * 100;
    coordsYPercent = coordY / parentHeight * 100;
})