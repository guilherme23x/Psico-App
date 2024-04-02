document.addEventListener('DOMContentLoaded', function () {
    const titles = document.querySelectorAll('.card__tittle');

    titles.forEach(title => {
        title.addEventListener('click', abreOuFechaResposta);
    });
});

function abreOuFechaResposta(event) {
    const classe = 'open';
    const cardTitle = event.currentTarget;
    const cardInformation = cardTitle.nextElementSibling;


    cardTitle.classList.toggle(classe);
    cardInformation.classList.toggle(classe);
}