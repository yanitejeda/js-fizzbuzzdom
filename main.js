// centrare il testo
const tittle = document.querySelector('h1');
tittle.style.textAlign = 'center';

const scacchieraContainer = document.getElementById('container_scacchiera');







for (let i = 1; i <= 10; i++){

    console.log('tabellina del', i);
    scacchieraContainer.innerHTML += `<div class='col'>
                                    <h4>${i}</h4>
                                        </div>`;
}







