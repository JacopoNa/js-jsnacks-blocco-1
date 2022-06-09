// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// variabile per fare la somma dei numeri inseriti
let somma = 0

// chiedo 10 volte all'utente di inserire numero
for (let i = 0; i < 10; i++) {
    const num = parseInt(prompt('Inserisci un numero'));

    // somma numeri
    somma += num
}

console.log(somma)