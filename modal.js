console.log("modal here");

const openBtn = document.querySelector("#popup");
const modal = document.querySelector(".modal");
openBtn.addEventListener("click", function (e) {
    modal.classList.add("modal--active");
});

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function () {
    modal.classList.remove("modal--active");
});
