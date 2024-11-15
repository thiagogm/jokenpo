/**
 * 
 * @returns 
 */
function jogar() {
    if (!document.getElementById('pedra').checked &&
        !document.getElementById('papel').checked &&
        !document.getElementById('tesoura').checked) {
        alert("Selecione uma opção");
        return;
    }

    let sorteio = Math.floor(Math.random() * 3);
    switch (sorteio) {
        case 0:
            document.getElementById('pc').src = "img/pcpedra.png";
            break;
        case 1:
            document.getElementById('pc').src = "img/pcpapel.png";
            break;
        case 2:
            document.getElementById('pc').src = "img/pctesoura.png";
            break;
    }

    if ((document.getElementById('pedra').checked && sorteio === 0) ||
        (document.getElementById('papel').checked && sorteio === 1) ||
        (document.getElementById('tesoura').checked && sorteio === 2)) {
        document.getElementById('resultado').innerText = "EMPATE";
    } else if ((document.getElementById('pedra').checked && sorteio === 2) ||
               (document.getElementById('papel').checked && sorteio === 0) ||
               (document.getElementById('tesoura').checked && sorteio === 1)) {
        document.getElementById('resultado').innerText = "Você Ganhou!";
    } else {
        document.getElementById('resultado').innerText = "PC Venceu!";
    }
}

function limpar() {
    document.getElementById('pc').src = "img/pc.png";
    document.getElementById('resultado').innerText = "";
}


