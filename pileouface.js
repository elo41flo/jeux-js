const choix = Number(prompt("Tape 1 ou 2"));

const aleatoire = Math.random() < 0.5 ? 1 : 2;

if (choix === aleatoire) {
    console.log("Bravo ! C'était bien " + aleatoire);
} else {
    console.log("Raté ! C'était " + aleatoire);
}