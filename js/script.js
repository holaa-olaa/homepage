{
    const welcome = () => {
        console.log("Let's go travel!");
    };

    const togglePhotos = () => {

        const photosContainer = document.querySelector(".jsImagesCointainer");
        const buttonLabel = document.querySelector(".jsButtonLabel");

        buttonLabel.innerText = photosContainer.classList.toggle('invisible') ? "Pokaż" : "Ukryj";

    };

    const init = () => {

        const buttonDisappearingPhotos = document.querySelector(".jsButtonDisappearingPhotos");

        buttonDisappearingPhotos.addEventListener("click", togglePhotos);

        welcome();
    }

    init();
}