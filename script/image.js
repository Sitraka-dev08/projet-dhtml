const image2 = document.getElementById("image2");
const sliderLargeur = document.getElementById("sliderlargeur");
const sliderHauteur = document.getElementById("sliderhauteur");
const valeurLargeur = document.getElementById("valeurlargeur");
const valeurHauteur = document.getElementById("valeurhauteur");

image2.style.width = sliderLargeur.value + "px";
image2.style.height = sliderHauteur.value + "px";

sliderLargeur.addEventListener("input", () => {
    image2.style.width = sliderLargeur.value + "px";
    valeurLargeur.textContent = sliderLargeur.value;
});

sliderHauteur.addEventListener("input", () => {
    image2.style.height = sliderHauteur.value + "px";
    valeurHauteur.textContent = sliderHauteur.value;
});
