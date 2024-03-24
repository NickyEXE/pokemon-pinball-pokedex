class PokemonCheckbox{

    static all = []

    constructor(pokemon){
        this.pokemon = pokemon
        this.constructor.all.push(this)
    }

    static renderAll(form){
        dataManager.pokemons.forEach(pokemon => form.append(new PokemonCheckbox(pokemon).render()))
        this.markSavedPokemon()
    }

    static markSavedPokemon(){
        const ids = dataManager.savedPokemonIds
        this.all.forEach(checkbox => {
            if(checkbox.pokemon.number == ids[0]){
                ids.shift()
                checkbox.input.checked = true
            }
        })
    }

    render(){
        const el = document.createElement("div")
        el.classList.add("pokemonCheckbox")
        this.input = document.createElement("input")
        this.input.setAttribute("name", "pokemonInput")
        this.input.setAttribute("type", "checkbox")
        this.input.setAttribute("value", this.pokemon.number)
        const label = document.createElement("label")
        label.setAttribute("for", "pokemonInput")
        label.innerText = `${this.pokemon.number} - ${this.pokemon.name}`
        el.append(this.input, label)
        return el
    }
}