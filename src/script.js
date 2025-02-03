const detailedImage = document.querySelector(".detailedContainer-image");
const detailedTitle = document.querySelector(".detailedContainer-title");

function setDetails(boxElement) {
    detailedImage.alt = boxElement.getAttribute("data-alt-text");
    detailedTitle.innerHTML = boxElement.getAttribute("data-detailed-text");
}
for(let i = 0; i < boxesElements.length; i++) {
    boxesElements[i].addEventListener("Click", function () {
        setDetails(boxesElements[i]);
    })
}