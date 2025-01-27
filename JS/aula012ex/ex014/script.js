function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    
    if(hora >= 0 && hora < 12){
        //dia

        img.src='foto-manha.png'
        img.style.padding='10px'
        document.body.style.background = '#d3b1a8'
    } else if(hora > 12 && hora <= 18){
        //tarde
        
        img.src='foto-tarde.png'
        img.style.padding='50px'
        document.body.style.background = '#994e2e'
    } else{
        //noite
        
        img.src='foto-noite.png'
        img.style.padding='60px'
        document.body.style.background = '#1d0f0e'
    }
}