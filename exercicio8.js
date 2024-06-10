document.addEventListener('DOMContentLoaded', () => {
    const notas = [7.5, 6.3, 8.1];
    const media = notas.reduce((a, b) => a + b, 0) / notas.length;
    document.getElementById('resultado').textContent = `A média das notas é: ${media.toFixed(2)}`;
});
