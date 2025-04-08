let num = [2, 3, 6, 8, 1]
num[3] = 5
num[5] = 9
num.push(4)
num[1] = 7


console.log(num)

/*for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`);   
}
*/

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`);  
}

console.log(`O primeiro valor do array é o ${num[0]}.`);
let valor = num.indexOf(5)
if (valor == -1) {
    console.log('O valor não foi encontrado.');
} else {
    console.log(`O valor está na posição ${valor}.`);
}
console.log(`Nosso vetor em ordem crescente é ${num.sort()}.`);
console.log(`O tamanho do array é de ${num.length} elementos.`);
