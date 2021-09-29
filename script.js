let rings = 3
let moveFrom = ''
let moveTo = ''
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
    if (moveFrom === '') {
        moveFrom = event.currentTarget
        if (moveFrom.childElementCount === 0) {
            moveFrom = ''
           result('Essa torre está vazia. Escolha outra.')
        }
    }
    else {
        moveTo = event.currentTarget
        
        if (moveTo.childElementCount > 0 &&
            moveTo.lastElementChild.id < moveFrom.lastElementChild.id) {
            result('Você não pode colocar um anel menor sobre um maior. Tente novamente')
          
        } 
       
        else {
            moveTo.appendChild(moveFrom.lastElementChild)
            count++
            moveFrom = ''
            
            if(moveTo.childElementCount == rings){
                console.log('Parabens!! Voce venceu');
                document.getElementById('vitoria').innerHTML = '';   
            }
            
           contar(count)
        }
            
    }
    
      
    }



createRings()

const towers = document.querySelectorAll('#container > div')

for (let i = 0; i < towers.length; i++) {
    towers[i].addEventListener('click', moves)
}


// Yasmin
//contar movimentos
function contar(count){
    const movimentos = document.querySelector('#movimentos'); 
    const contar = document.getElementById('contar');
    contar.innerText = count ;
    movimentos.appendChild(contar) ;   
}

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

}