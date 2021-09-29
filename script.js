let rings = 3
let moveFrom, moveTo = ''
let count = 0

// Emerson
function createRings() {
    for (let i = rings; i > 0; i--) {
        const tower = document.getElementById('tower--1')
        const ring = document.createElement('div')
        ring.id = `ring--${i}`
        tower.appendChild(ring)
    }
}


function moves(event) {
    if (moveFrom === '' || moveFrom === undefined) {
        moveFrom = event.currentTarget
        if (moveFrom.childElementCount === 0) {
            moveFrom = undefined
           result('Essa torre está vazia. Escolha outra.')
        }
    }
    else {
        moveTo = event.currentTarget
        if (moveTo.childElementCount > 0 &&
            moveTo.lastElementChild.id < moveFrom.lastElementChild.id) {
            result('Você não pode colocar um anel menor sobre um maior. Tente novamente')
            count += 0
        }
        else {
            moveTo.appendChild(moveFrom.lastElementChild)
            count++
            moveFrom = ''

            let towerAtual = event.currentTarget;
            const tower = document.getElementById('tower--3')
            let quantidadeRing = event.target.childElementCount;
            
            if(towerAtual === tower && quantidadeRing === rings){
                result('Parabens!! Voce venceu');
                document.getElementById('vitoria').innerHTML = '';
                result('Click em RESET para um novo Jogo!');
            }
            const movimentos = document.querySelector('#movimentos'); 
            const contar = document.getElementById('contar');
            contar.innerText = count ;
            movimentos.appendChild(contar) ;   
        }
            
        }
    
      
    }



createRings()

const towers = document.querySelectorAll('#container > div')

for (let i = 0; i < towers.length; i++) {
    towers[i].addEventListener('click', moves)
}


// Yasmin

//funcçao que mostra o resultado da vitoria
function result(value){
    const vitoria = document.getElementById('vitoria');
    const resultVitoria = document.createElement('p');
    resultVitoria.innerText = `${value}`;
    vitoria.appendChild(resultVitoria);
}



    const reset = document.getElementById('reset');
    reset.addEventListener('click',resetGame)

//funcao que reseta o jogo
function resetGame(){
    document.getElementById('vitoria').innerHTML = '';
    for (let i = rings; i > 0; i--) {
    const tower = document.getElementById('tower--1').innerHTML = '';
    const tower2 = document.getElementById('tower--2').innerHTML = '';
    const tower3 = document.getElementById('tower--3').innerHTML = '';
 
    
    createRings()
    }
    
}resetGame()