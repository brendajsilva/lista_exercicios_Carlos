document.addEventListener('DOMContentLoaded', () => {
    const km1 = 27, litros1 = 3.5;
    const km2 = 39, litros2 = 6.3;
    const media = (km1 / litros1 + km2 / litros2) / 2;
    document.getElementById('resultado').textContent = `A média de km por litro é: ${media.toFixed(2)}`;
});
