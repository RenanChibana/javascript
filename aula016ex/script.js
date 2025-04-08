let num = document.getElementById('num')
let val = document.getElementById('val')
let res = document.getElementById('res')
let grupo = []

function add() {
    //val.innerHTML = ''
    let n = Number(num.value)
    if (n <= 0 || n > 100) {
        window.alert('Digite um número válido.')
    } else {
    let item = document.createElement('option')
    item.text = `Número ${n} adicionado.`
    val.appendChild(item)
    }
    
    let grupo = []
    grupo.push(n)
}


function resultado() {
    //let grupo = document.getElementById('val')
    // TAMANHO
    let tam = grupo.lenght
    res.innerHTML += `Ao todo temos ${tam} números cadastrados.`


    // SOMA  / MAIOR E MENOR NUM
    let soma = 0
    let mai = 0
    let men = 0
    for (let x in grupo) {
        soma += grupo[x]
        if (x = 0) {
            mai = grupo[x]
            men = grupo[x]
        } else if (grupo[x] > mai) {
            mai = grupo[x]
        } else if (grupo[x] < men) {
            men = grupo[x]
        }
    }

    // MEDIA
    let med = soma / tam

    res.innerHTML += `O maior valor informado foi ${mai}.`
    res.innerHTML += `O menor valor informado foi ${men}.`
    res.innerHTML += `A soma de todos os valores foi de ${soma}.`
    res.innerHTML += `A média de todos os valores é de ${med}.`
    res.innerHTML += `${grupo}`
}