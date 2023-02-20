var botão = window.document.getElementById('botaozim')
botão.addEventListener('click', energia)
let cont = 0

function energia() {
    var txt = window.document.getElementById('txt')
    var img = window.document.getElementById('imagem')

    if (cont < 5) {
        if (botão.innerHTML == 'ACENDER') {
            txt.innerHTML = 'Cliquem em <strong>"APAGAR"</strong> para apagar a lâmpada.'
            img.src = 'mídia/acesa.jpg'
            botão.innerHTML = 'APAGAR'
        } else {
            txt.innerHTML = 'Cliquem em <strong>"ACENDER"</strong> para acender a lâmpada.'
            img.src = 'mídia/apagada.jpg'
            botão.innerHTML = 'ACENDER'
            cont = cont + 1
        }
    } else {
        txt.innerHTML = 'Sua Lâmpada quebrou. Clique em <strong>"TROCAR LÂMPADA"</strong> para trocar a lâmpada.'
        img.src = 'mídia/lãmpada_quebrada.jfif'
        botão.innerHTML = 'TROCAR LÂMPADA'
        //cont = 0
    }
}

function trocarPage() {
    if (cont == 5) {
        window.confirm('teste')
    }
}