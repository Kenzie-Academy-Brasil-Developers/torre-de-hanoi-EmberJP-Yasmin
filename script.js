let tower1, tower2, tower3 = []
let rings = 3


// Emerson
function createRings() {
    for (let i = rings; i > 0; i--) {
        const tower = document.getElementById('tower--1')
        const ring = document.createElement('div')
        ring.id = `ring--${i}`
        tower.appendChild(ring)
        console.log(ring.id)
    }
}



// Yasmin