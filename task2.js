const numbers = [12, 98, 5, 41, 23, 78, 46];

const numEven =[];

for( i = 0; i < numbers.length; i++ ){
    if (numbers[i] % 2 === 0){
        numEven.push(numbers[i])
    }
}

numEven[2] = 76;
console.log(numEven);