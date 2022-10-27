function carregar() {
    var msg = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var minute = data.getMinutes()
    var hora = data.getHours()
    //var hora =                        //Forçar hora para testar todos os cenários possíveis
    msg.innerHTML = `<strong>Agora são ${hora} horas e ${minute} minutos.</strong>`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.innerHTML = '<img src="manha.png">'
        document.body.style.background = '#bedde5'
    } else if ( hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#ffac52'
    } else{
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#0080c4'
    }
}


