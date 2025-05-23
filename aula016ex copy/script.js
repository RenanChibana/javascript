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
        res.innerHTML = ''
    } else {
        window.alert('Número inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (list.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let tot = list.length 
        let soma = 0
        let mai = 0
        let men = 0
        for (let pos in list) {
            soma += list[pos]
            if (pos == 0) {
                mai = list[pos]
                men = list[pos]
            } else {
                if (list[pos] > mai) {
                    mai = list[pos]
                }
                if (list[pos] < men) {
                    men = list[pos]
                }
            }
        }
        let med = soma / tot
        res.innerHTML = ''   
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor foi ${mai}.</p>`
        res.innerHTML += `<p>O menor valor foi ${men}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é de ${med}.</p>`
        }
}