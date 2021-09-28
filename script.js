let tower1, tower2, tower3 = []


// Emerson


// Yasmin
let click = 0
function condicaoVitoria(event){
    const towerAtual = event.currentTarget;
    const quantidadeRing = event.target.childElementCount;
    const tower3 = document.querySelector('#tower--3')
     
    if( towerAtual === tower3 && quantidadeRing === 4){
        console.log('Parabens voce venceu')
        click = 1
    }
    else{
        console.log('Click em RESET para um novo Jogo!')
        click = 0
    }
}