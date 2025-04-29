const choixPossible = ["Pierre", "Feuille", "Ciseaux"];
const choixUtilisateur = prompt("Pierre, feuille ou ciseaux ?") .toLowerCase();
const choixOrdi = choixPossibles [Math.floor(Math.random()*3)];

console.log("Oridnateur a choisi :" + choixOrdi);

if (choixUtilisateur === choixOrdi) {
    console.log("Égalité !");
} else if (
    (choixUtilisateur === "pierre" && choixOrdi === "ciseaux") ||
    (choixUtilisateur === "feuille" && choixOrdi === "pierre") ||
    (choixUtilisateur === "ciseaux" && choixOrdi === "feuille")
) {
    console.log("Tu as gagné !");
} else {
    console.log("Tu as perdu !");
}