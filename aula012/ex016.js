var idade = 65
console.log(`Você tem ${idade} anos.`);

if (idade < 16) {
    console.log('Não pode votar ainda.');
} else if (idade < 18 || idade >= 65) {
        console.log('O voto é opcional.');        
    } else {
        console.log('O voto é obrigatório.');  
}