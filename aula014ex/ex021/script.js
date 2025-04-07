function contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'ERRO. Faltam dados, preencha todos os campos.'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        var c = i
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }
        if (i < f) {
            while (c <= f) {
                res.innerHTML += ` ${c} \u{1F449}`
                c += p
            }
        res.innerHTML += `\u{1f3c1}`
        } else {
            while (c >= f) {
                res.innerHTML += ` ${c} \u{1F449}`
                c -= p
            }
            res.innerHTML += `\u{1f3c1}`
        }
        }  
}