const piadas = [
    "Porque é que os pinguins estão sempre tão bem vestidos? Porque usam smokings!",
    "O que acontece quando um grupo de pinguins faz uma festa? Transforma-se numa festa no gelo!",
    "Como os pinguins consertam seus móveis? Com um pinguim-entinho!",
    "O que diz um pinguim quando algo surpreendente acontece? É de gelar a espinha!",
    "Por que os pinguins são tão bons em desportos? Porque eles têm um excelente gelo-talento!",
    "Qual é o programa de TV favorito dos pinguins? Congelados de emoção",
    "Como é que os pinguins mantêm as suas casas seguras? Eles usam pingu-imperadores!",
    "O que diz um pinguim ao outro quando quer sair? Vamos dar uma volta no gelo!",
    "Por que os pinguins são tão bons em música? Porque têm excelentes notas no gelo!",
    "Como é que os pinguins se mantêm em contacto uns com os outros? Eles usam o pengu-phone!",
    "O que acontece quando um pinguim conta uma piada de mau gosto? Todos riem, mas é de frio!",
    "Por que os pinguins nunca são egoístas? Porque pensam sempre no coletivo!",
]

let contadorPiada = 0;

document.getElementById("botao-piada").addEventListener("click", contarPiada);

function contarPiada() {
    const caixaPiada = document.getElementById("texto-piada");
    const botaoPiada = document.getElementById("botao-piada");

    if (contadorPiada < piadas.length) {
        caixaPiada.innerText = piadas[contadorPiada];
        botaoPiada.innerText = "Contar piada";
        contadorPiada++;
    } else {
        caixaPiada.innerText = "Já não sei mais piadas!";
        botaoPiada.innerText = "Repetir";
        contadorPiada = 0; // Reinicia o ciclo
    }
}
