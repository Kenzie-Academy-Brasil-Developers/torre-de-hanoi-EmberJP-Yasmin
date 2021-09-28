let tower1, tower2, tower3 = []
let rings = 3


// Emerson
function createRings() {
    for (let i = rings; i > 0; i--) {
        const tower = document.getElementById('tower--1')
        const ring = document.createElement('div')
        ring.id = `ring--${i}`
        tower.appendChild(ring)
    }
}



// Yasmin
let click = 0
function condicaoVitoria(event){
    let towerAtual = event.currentTarget.getElementById;
    let quantidadeRing = event.target.childElementCount;
     
    if( towerAtual === 'tower3' && quantidadeRing === 4){
        result('Parabens!! Voce venceu');
    
        if(click === 1){
            document.getElementById('vitoria').innerHTML = '';
            result('Click em RESET para um novo Jogo!');
            click = 0;
        }    
    }
}condicaoVitoria()

function result(value){
    const vitoria = document.getElementById('vitoria');
    const resultVitoria = document.createElement('p');
    resultVitoria.innerText = `${value}`;
    vitoria.appendChild(resultVitoria);
}
    const disc1 = document.querySelector('#ring--1');
    const disc2 = document.querySelector('#ring--2');
    const disc3 = document.querySelector('#ring--3');
    const reset = document.getElementById('reset');


    reset.addEventListener('click',resetGame)
function resetGame(){
    document.getElementById('vitoria').innerHTML = '';
    const tower1 = document.querySelector('#tower--1');
    tower1.appendChild(disc1);
    tower1.appendChild(disc2);
    tower1.appendChild(disc3);
    console.log('oi')
    
}