var agora = new Date
var diaSem = agora.getDay()
var dia = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear()

console.log(`Segue abaixo as informações do dia de hoje:`);


switch(diaSem) {
    case 0:
        console.log('Domingo');
        break    
    case 1:
        console.log('Segunda-feira');
        break
    case 2:
        console.log('Terça-feira');
        break
    case 3:
        console.log('Quarta-feira');
        break
    case 4:
        console.log('Quinta-feira');
        break
    case 5:
        console.log('Sexta-feira');
        break
    case 6:
        console.log('Sábado');
        break        
}

console.log(dia);


switch(mes) {
    case 0:
        console.log('Janeiro');
        break            
    case 1:
        console.log('Fevereiro');
        break        
    case 2:
        console.log('Março');
        break        
    case 3:
        console.log('Abril');
        break        
    case 4:
        console.log('Maio');
        break        
    case 5:
        console.log('Junho');
        break        
    case 6:
        console.log('Julho');
        break        
    case 7:
        console.log('Agosto');
        break        
    case 8:
        console.log('Setembro');
        break        
    case 9:
        console.log('Outubro');
        break        
    case 10:
        console.log('Novembro');
        break        
    case 11:
        console.log('Dezembro');
        break                   
}

console.log(ano);
