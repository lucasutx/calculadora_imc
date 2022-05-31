
const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome');
    const altura = document.getElementById('altura');
    const peso = document.getElementById('peso');
    const resultado = document.getElementById('resultado');


    if (nome.value !== '' && altura.value !== '' && peso.value !== '') {
        
        const valorIMC = (peso.value / (altura.value * altura.value)).toFixed(1);
        resultado.textContent = valorIMC;
        
    } else {
        resultado.textContent = 'Preencha todos os campos';
    };

};

calcular.addEventListener('click', imc);