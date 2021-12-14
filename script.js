function carregar() {
    var txt = document.getElementById("txt")
    var img = document.getElementById("imagen")
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()

    if (hora >= 0 && hora < 12) {
        // Bom dia
        document.body.style.background = "#D2C05F"
        txt.innerHTML = `Agora são ${hora}:${minutos} da manhã`
        img.src = "manha.png"
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!!
        document.body.style.background = "#B07C66"
        txt.innerHTML = `Agora são ${hora}:${minutos} da tarde`
        img.src = "tarde.png"
    } else {
        // Boa noite!
        document.body.style.background = "#002F4B"
        txt.innerHTML = `Agora são ${hora}:${minutos} da noite`
        img.src = "noite.png"
    }
}