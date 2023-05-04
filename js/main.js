const randomNumbers = [];


while ( randomNumbers.length < 5) {
    const numero = getRandomNumber(1, 100);
    console.log("nuovo numero", numero);

    if (!randomNumbers.includes(numero)) {
        randomNumbers.push( numero);
    }

}

document.getElementById("numeri").innerText = randomNumbers;

setTimeout(nascondiNumeri, 29 * 1000);

setTimeout(function() {

    const numeriUtente = chiediNumeri();
    console.log("Numeri utente: ", numeriUtente);

    const numeriIndovinati = confrontaNumeri(randomNumbers, numeriUtente);

    setInnerTextByID("messaggio", "Hai indovinato i seguenti numeri");
    setInnerTextByID("numeri", numeriIndovinati);

}, 31 * 1000);

// Funzioni

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min +1) + min) ;
}

function setInnerTextByID(elemId, contenuto) {
    document.getElementById(elemId).innerText = contenuto;
}

function confrontaNumeri(randomNumbers, userNumbers) {

    const indovinati = [];

    for (let i = 0; i < randomNumbers.length; i++) {
        const currentNumber = randomNumbers[i];
        
        if(userNumbers.includes(currentNumber)) {
            indovinati.push(currentNumber)
        }
    }
    return indovinati;
}

function nascondiNumeri() {
    document.getElementById("messaggio").innerText = "Inserisci i 5 numeri da ricordare"
    document.getElementById("numeri").innerText = "";
}

function chiediNumeri () {

    const numeriUtente = []

    

    while (numeriUtente.length < 5) {
        const numero = parseInt(prompt("Inserisci un numero"));

        if (numeriUtente.includes(numero)==false && numero!="" && numero!=null && numero>0) {
            numeriUtente.push(numero);
        }
    }
    return numeriUtente;
}