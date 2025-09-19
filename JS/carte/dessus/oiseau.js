const bouttons = document.querySelector("#boutons");



const cartesPapillons = cartes.filter(carte => carte.place === "oiseaux")
cartesPapillons.forEach(carte => {
  const btn = document.createElement("button");
  btn.textContent = carte.nom;
  btn.addEventListener("click", () => ajouterCarte(mainJoueur1, carte.nom));
  bouttons.appendChild(btn);
});