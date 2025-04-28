let randomNumber = Math.floor(Math.random() * 10);

let input = prompt ("Entrez le chiffre entier que vous pensez être correct :");
let chiffre = Number(input);

if (randomNumber === chiffre) {
    console.log("Bravo vous avez trouvez le bon chiffre !");
} else {
    console.log("Game over, le bon chiffre était : " + randomNumber);
}