console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailsAudio = document.querySelector(".details-audio");
const detailsContainer = document.querySelector(".details-container");
const mainClass = document.querySelector(".main-class");
const HIDDEN = "hidden";
const IS_TINY = "is-tiny";

function setDetails(anchor) {
    detailsImage.setAttribute("src", anchor.getAttribute("data-details-image"));
    detailsAudio.setAttribute("src", anchor.getAttribute("data-details-audio"));
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
}

for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function () {
        console.log("event-click on ", anchors[i]);
        showDetails();
        setDetails(anchors[i]);
        detailsAudio.play();
    })
}

function showDetails() {
    mainClass.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_TINY);
    setTimeout(function () {
        detailsContainer.classList.remove(IS_TINY);
    }, 1)
    setTimeout(function () {
        detailsAudio.pause();
        detailsAudio.currentTime = 0;
    }, 5000);
}

function hideDetails() {
    mainClass.classList.add(HIDDEN);
}