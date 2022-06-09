// array di numeri
const numbers = [ 23 , 45 , 16 , 8 , 13 , 2 , 15 , 4 ];

for (let i = 0; i < numbers.length; i++) {
    const singleNumber = numbers[i];

    if (singleNumber % 2 === 0) {
        document.getElementById('green').innerHTML += singleNumber + ' '
    } else {
        document.getElementById('red').innerHTML += singleNumber + ' '
    }
}