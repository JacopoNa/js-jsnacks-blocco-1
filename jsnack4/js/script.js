// - Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// array vuoto
let emptyArray = [];

// chiedo di inserire un numero 6 volte
for(let i = 0; i < 6; i++) {
    const num = parseInt(prompt('Inserisci un numero'));

    // se il numero è dispari lo aggiungo all'array
    if (num % 2 !== 0) {
       emptyArray.push(num);
       console.log(emptyArray);
    } 
}