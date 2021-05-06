console.log("Let's go travel!");

let buttonDisappearingPhotos = document.querySelector(".jsButtonDisappearingPhotos");
let photosContainer = document.querySelector(".jsImagesCointainer");
let buttonLabel = document.querySelector(".jsButtonLabel");

buttonDisappearingPhotos.addEventListener("click", () => {
    buttonLabel.innerText = photosContainer.classList.toggle('invisible') ? "Pokaż" : "Ukryj";
});