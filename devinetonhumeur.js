const humeur = prompt("Tape 1, 2 ou 3 pour voir ton humeur !");

if (humeur === "1") {
    console.log("Heureux !");
} else if (humeur === "2") {
    console.log("Triste !");
} else if (humeur === "3") {
    console.log("Enervé !");
} else {
    console.log("Entre un nombre entre 1 et 3 !");
}