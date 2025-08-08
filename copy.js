// let price = 25;
// let comPrice = price;

// price = 14;
// comPrice = 15 ;
// console.log(price);
// console.log(comPrice);

// let product = [25, 25, 25];
// let comProduct = product;

// comProduct = 12;
// product = 44;

// console.log(product);
// console.log(comProduct);


// **string,boolean,nuber a  kuno effect pore nah but array and object te effect pore**

let item = [74, 92, 83, 44];

// let comItem =  [] ;

// for(const itm of item){
//     comItem.push(item);
// }
// comItem [0] = 14;
// item[1] = 32;
// console.log(comItem);
// console.log(item);

// const newNumber = Array.from(item);
// const newNumber = [].concat(item)
const newNumber = [...item]


newNumber.push(8);


console.log(item);
console.log(newNumber);


//  Shallow copy vs deep copy


