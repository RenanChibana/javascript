let num = document.querySelector('input#num')
let val = document.querySelector('select#val')
let res = document.querySelector('div#res')
let list = []

function isNumero(num) {
    if (num >= 1 && num <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumero(num.value) && !inList(num.value, list)) {
        list.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado.`
        val.appendChild(item)
    } else {
        window.alert('Número inválido ou já encontrado na lista.')
    }
}