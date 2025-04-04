function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 5 && hora < 12) {
        img.src = 'dia.png'
        document.body.style.background = '#57b3f6'
        msg.innerHTML += '<p>BOM DIA!!</p>'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#fb8b0e'
        msg.innerHTML += '<p>BOA TARDE!!</p>'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#1d3856'
        msg.innerHTML += '<p>BOA NOITE!!</p>'
    }
}