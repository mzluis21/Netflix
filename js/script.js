
document.querySelectorAll('.carrossel-container').forEach(carrossel => {
const container = carrossel.querySelector('.cards-carrossel');
const esquerda = carrossel.querySelector('.seta.esquerda');
const direita = carrossel.querySelector('.seta.direita');

const scrollAmount = 300;

esquerda.addEventListener('click', () => {
    container.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
    });
});

direita.addEventListener('click', () => {
    container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
    });
});
});


const perguntas = document.querySelectorAll('.sel-perg');

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
    // Fecha todas
    perguntas.forEach(p => {
        if (p !== pergunta) {
        p.classList.remove('active');
        }
    });

    // Alterna atual
    pergunta.classList.toggle('active');
    });
});
