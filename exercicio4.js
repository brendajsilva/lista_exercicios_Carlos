document.addEventListener('DOMContentLoaded', () => {
    const resultado = 7.9 * 3.2 + 5.2 / 3.1 + 7.9;
    document.getElementById('resultado').textContent = `O resultado é: ${resultado.toFixed(2)}`;
});
