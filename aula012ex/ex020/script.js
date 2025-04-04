function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO. Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'crianca-m.png')
                res.innerHTML = `Menino de ${idade} anos.`
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute('src', 'adoles-m.png')
                res.innerHTML = `Adolescente de ${idade} anos.`
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'adulto-m.png')
                res.innerHTML = `Homem de ${idade} anos.`
            } else if (idade >= 60) {
                img.setAttribute('src', 'idoso-m.png')
                res.innerHTML = `Senhor de ${idade} anos.`
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'crianca-f.png')
                res.innerHTML = `Menina de ${idade} anos.`
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute('src', 'adoles-f.png')
                res.innerHTML = `Adolescente de ${idade} anos.`
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'adulto-f.png')
                res.innerHTML = `Mulher de ${idade} anos.`
            } else if (idade >= 60) {
                img.setAttribute('src', 'idoso-f.png')
                res.innerHTML = `Senhora de ${idade} anos.`
            }
        }
        res.style.textAlign = 'center'
        //res.innerHTML += `${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}