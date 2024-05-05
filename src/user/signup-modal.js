const signupModalElement = document.querySelector("#signupModal");
const signupModalOpenElement = document.querySelector("#signup-btn");
const signupModalCloseElement = document.querySelector("#signupModal .btn-close");
const backdropTemplate = document.querySelector("#modal-backdrop")
    .content
    .querySelector(".modal-backdrop");

const openSignupModal = () => {
    signupModalElement.style.display = "block";

    setTimeout(() => {
        signupModalElement.classList.add("show");
        const backdropElement = backdropTemplate.cloneNode(true);
        signupModalElement.insertAdjacentElement("afterend", backdropElement);
    }, 1000);

    signupModalCloseElement.addEventListener("click", closeSignupModal);
}

const closeSignupModal = () => {
    signupModalElement.classList.remove("show");

    setTimeout(() => {
        signupModalElement.style.display = "none";
        signupModalElement.classList.remove("show");
        document.querySelector(".modal-backdrop").remove();
        signupModalCloseElement.addEventListener("click", closeSignupModal);
    }, 1000);
}

signupModalOpenElement.addEventListener("click", function (evt) {
    evt.preventDefault();
    openSignupModal();
});
