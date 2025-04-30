function verifierPairOuImpair(nombre) {
    if (nombre % 2 === 0) {
        console.log("C'est un nombre pair !");
    } else {
        console.log("C'est un nombre impair !");
    }
}

const saisie = Number(prompt("Tpa un nombre pour savoir d'il est par ou impair"));
verifierPairOuImpair(saisie);