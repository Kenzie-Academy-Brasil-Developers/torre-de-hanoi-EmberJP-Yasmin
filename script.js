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
}createRings()



// Yasmin

//funcao que mostra se o jogador ganhou ou não
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
}

//funcao que faz um contador de movimentos
function contadorMovimentos(){
  const movimentos = document.querySelector('#movimentos'); 
  const contar = document.createElement('p')
  
  let contador = 0 
    if(click === 1){
        contador++
        contar.innerText = `${contador}`
        movimentos.appendChild(contar)
    }

}contadorMovimentos()



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
    const tower = document.getElementById('tower--1');
    const ring = document.createElement('div');
    ring.innerHTML = ''
    ring.id = 'ring--'+i
    tower.appendChild(ring)
    console.log(tower)
    }
    
}resetGame()