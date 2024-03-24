class DataManager {
    constructor(){
        this.pokemons = []
        this.locations = []
    }

    populatePokemons(pokemons){
        this.pokemons = pokemons.map(pokemon => {
            pokemon.caught = false
            return pokemon
        })
    }

    populateLocations(locations){
        this.locations = locations
    }

    savePokemons(ids){
        console.log("pokemon ids", ids)
        localStorage.setItem("myPokemons", ids.join(","))
    }

    get savedPokemonIds(){
        return localStorage.getItem("myPokemons").split(",")
    }


}