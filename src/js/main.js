const containerVendredi = document.querySelector(".container-vendredi");
const buttonVendredi = document.querySelector(".button-vendredi");
var openMenu = function () {
  containerVendredi.classList.toggle("is-open");
  buttonVendredi.classList.toggle("is-active");
};

buttonVendredi.addEventListener("click", openMenu);

const containerSamedi = document.querySelector(".container-samedi");
const buttonSamedi = document.querySelector(".button-samedi");
var openMenu = function () {
  containerSamedi.classList.toggle("is-open");
  buttonSamedi.classList.toggle("is-active");
};

buttonSamedi.addEventListener("click", openMenu);

const containerDimanche = document.querySelector(".container-dimanche");
const buttonDimanche = document.querySelector(".button-dimanche");
var openMenu = function () {
  containerDimanche.classList.toggle("is-open-last-one");
  buttonDimanche.classList.toggle("is-active");
};

buttonDimanche.addEventListener("click", openMenu);

const languageSelectors = document.querySelectorAll(".language-selector");

languageSelectors.forEach((selector) => {
  selector.addEventListener("click", function () {
    languageSelectors.forEach((selector) => {
      selector.classList.remove("active");
    });

    this.classList.add("active");
  });
});
