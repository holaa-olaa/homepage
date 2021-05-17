{
    const welcome = () => {
        console.log("Let's go travel!");
    };

    const togglePhotos = () => {

        const imagesCointainerElement = document.querySelector(".js-imagesCointainer");
        const buttonLabelElement = document.querySelector(".js-buttonLabel");

        buttonLabelElement.innerText = imagesCointainerElement.classList.toggle('invisible') ? "Pokaż" : "Ukryj";

    };

    const init = () => {

        const buttonElement = document.querySelector(".js-button");

        buttonElement.addEventListener("click", togglePhotos);

        welcome();
    }

    init();
}