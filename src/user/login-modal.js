const loginModalElement = document.querySelector("#loginModal");
const loginModalOpenElement = document.querySelector("#login-btn"); // 33 кнопка входа
const loginModalCloseElement = document.querySelector("#loginModal .btn-close");
const backdropTemplate = document.querySelector("#modal-backdrop")
    .content
    .querySelector(".modal-backdrop");

const openLoginModal = () => {
    loginModalElement.style.display = "block";
    
    setTimeout(() => {
        loginModalElement.classList.add("show");
        document.body.classList.add("modal-open");
        const backdropElement = backdropTemplate.cloneNode(true);
        loginModalElement.insertAdjacentElement("afterend", backdropElement);
    }, 0);

    loginModalCloseElement.addEventListener("click", closeLoginModal);
}

const closeLoginModal = () => {
    loginModalElement.classList.remove("show");

    setTimeout(() => {
        loginModalElement.style.display = "none";
        document.querySelector(".modal-backdrop").remove();
        loginModalCloseElement.removeEventListener("click", closeLoginModal);
    }, 1000);
}

loginModalOpenElement.addEventListener("click", function (evt) {
    evt.preventDefault();
    openLoginModal();
});
