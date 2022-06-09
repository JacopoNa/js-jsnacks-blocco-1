// Chiedi un numero di 4 cifre all’utente nel prompt
//  e calcola la somma di tutte le cifre che compongono il numero. 

// chiedi numero all'utente
let userNumber = prompt('Inserisci un numero di 4 cifre');
console.log(userNumber)

// variabile da sommare
let msVar = 0

// scorro le cifre e le sommo
for (let i = 0; i < userNumber.length; i++) {
    singleNumber = parseInt(userNumber[i]);

    msVar += singleNumber;
}

console.log(msVar)

