const detailedImage = document.querySelector(".detailedContainer-image");
const detailedTitle = document.querySelector(".detailedContainer-title");
const boxesElements = document.querySelectorAll(".cars-image");

function setDetails(boxElement) {
    detailedImage.src = boxElement.src;
    detailedTitle.innerHTML = boxElement.getAttribute("data-detailed-text");
}
for(let i = 0; i < boxesElements.length; i++) {
    boxesElements[i].addEventListener("click", function () {
        setDetails(boxesElements[i]);
        detailedImage.classList.add('animate__animated', 'animate__fadeInBottomLeft');
        detailedImage.style.setProperty('--animate-duration', '1s');
        detailedImage.addEventListener("animationend", AnimationHandler, false);
        function AnimationHandler () {
            detailedImage.classList.remove('animate__animated', 'animate__fadeInBottomLeft');
        }
        detailedTitle.classList.add('animate__animated', 'animate__fadeInUp');
        detailedTitle.style.setProperty('--animate-duration', '1s');
        detailedTitle.addEventListener("animationend", AnimationHandler1, false);
        function AnimationHandler1 () {
            detailedTitle.classList.remove('animate__animated', 'animate__fadeInUp');
        }
    });
}
document.documentElement.style.setProperty('')