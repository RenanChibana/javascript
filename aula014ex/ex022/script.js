function tabuada() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    document.writeln = `Tabuada do ${num.value}:<br>`

    
    if (num.value.length == 0) {
        window.alert('[ERRO] Digite um valor válido para gerar a tabuada.')
    } else {
        var n = Number(num.value)
        var r = 0
        tab.innerHTML = ''
        for(c = 0; c <= 10; c++) {
            r = n * c
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${r}`
            tab.appendChild(item)
        }
    }
}