document.addEventListener('DOMContentLoaded', () => {
    const resultado = 5.5 + 3.3 / 2.0 * 4.8 + 6.1;
    document.getElementById('resultado').textContent = `O resultado é: ${resultado.toFixed(2)}`;
});
