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
        localStorage.setItem("myPokemons", ids.join(","))
    }

    get savedPokemonIds(){
        return localStorage.getItem("myPokemons").split(",")
    }

    get redTableLocations(){
        this.redTableLocs ||= [...new Set(this.pokemons.map(pokemon => pokemon.locations.redTable).flat())].sort()
        return this.redTableLocs
    }

    get blueTableLocations(){
        this.blueTableLocs ||= [...new Set(this.pokemons.map(pokemon => pokemon.locations.blueTable).flat())].sort()
        return this.blueTableLocs
    }

    get outstandingPokemonCheckboxes(){
        return PokemonCheckbox.all.filter(checkbox => !checkbox.checked)
    }
    
    outstandingPokemonAtLocation = (table, location) => {
        return this.outstandingPokemonCheckboxes.filter(checkbox => checkbox.locationData[table].includes(location)).map(cb => cb.pokemon)
    }
}