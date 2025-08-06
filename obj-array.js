let num = [1, 2, 34, 55, 67];
let player = [{}, {}, {},];
let employes = [
    { name: 'ashik', designation: 'contant writer', salary: 25},
    { name: 'atik', designation: 'devoloper', salary: 29},
    { name: 'abdul', designation: 'digital mearketing', salary: 22}

]
// console.log(employes[1].name);
// for(const employe of employes ){
//     console.log(employe.name, employe.designation, employe.salary);
// }

for ( emp of employes){
    let person = emp ;
    let personInfo = person.name + ': ' + person.salary;
    console.log(personInfo);
}