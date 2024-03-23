const container = new mainContainer
let pokemons = []
let locations = []
fetch("./pokemon.json").then(res => res.json()).then(res => {
    pokemons = res;
    fetch("./location.json").then(res => res.json()).then(res => {locations = res; container.render()})
})