let rings = 5
let moveFrom = ''
let moveTo = ''
let count = 0

// Emerson
const discos = document.querySelectorAll('#disco3','#disco4','disco5')
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
            
            const tower = document.getElementById('tower--1')
            if(moveTo !== tower && moveTo.childElementCount == rings){
                result('Parabens!! Voce venceu');
                

                if(disco.classList != 'disco')
                disco.classList.add('disco')
            }
            setTimeout(function(){
                disco.classList.remove('disco')
            },500)
            
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
    const contarMovimento = document.getElementById('contar');
    contarMovimento.innerText = count ;
    movimentos.appendChild(contarMovimento) ;   
}


function result(value){
    const Modal = document.getElementById('abrirModal');
    const VitoriaModal = document.getElementById('p');
    VitoriaModal.innerText = `${value}`;
    Modal.appendChild(VitoriaModal);
}

const reset = document.getElementById('reset');
reset.addEventListener('click',resetGame)
//funcao que reseta o jogo
function resetGame(){
    const tower1 = document.getElementById('tower--1').innerHTML = '';
    const tower2 = document.getElementById('tower--2').innerHTML = '';
    const tower3 = document.getElementById('tower--3').innerHTML = '';
    const abrirModal = document.getElementById('p').innerText = '';
    count = 0
    contar(count)
    createRings()

}