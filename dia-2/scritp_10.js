const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fnDoblar = n => n * 2;
const doblesV2 = numeros.map(fnDoblar);

const dobles = numeros.map(n => n * 2);
//console.log(doblesV2);


const pares = numeros.filter(n => n % 2 === 0);
//console.log("pares:", pares);


const impares = numeros.filter(n => n % 2 !== 0);
//console.log("impares:", impares);

/*
numeros.forEach(n => {
    console.log(n);
});
*/

const totalizado = numeros.reduce((acumulador,num)=> acumulador+num);
console.log("totalizado",totalizado);
