const container = new MainContainer
const dataManager = new DataManager
fetch("./pokemon.json").then(res => res.json()).then(pokemons => {
    dataManager.populatePokemons(pokemons);
    fetch("./location.json").then(res => res.json()).then(locations => {dataManager.populateLocations(locations); container.render()})
})