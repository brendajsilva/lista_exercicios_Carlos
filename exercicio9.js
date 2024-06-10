document.addEventListener('DOMContentLoaded', function() {
    let peso1 = 589;
    let peso2 = 1973;
    let peso3 = 1.47 * 1000; // Convertendo para gramas
    let peso4 = 2.42 * 1000; // Convertendo para gramas
    let peso5 = 744;

    let mediaGramas = (peso1 + peso2 + peso3 + peso4 + peso5) / 5;
    let mediaQuilogramas = mediaGramas / 1000;

    document.getElementById('resultado').textContent = `Média em gramas: ${mediaGramas.toFixed(2)}g, Média em quilogramas: ${mediaQuilogramas.toFixed(2)}kg`;
});
