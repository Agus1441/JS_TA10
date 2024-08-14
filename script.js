function getSum(numeros){
    let suma = 0;
    for(let i = 0; i<numeros.length ;i++){

        suma += numeros[i];
    }
    console.log(suma);
}

const numeros = [1,2,3,4,5,6,7,8,9,5,3,2]

getSum(numeros);