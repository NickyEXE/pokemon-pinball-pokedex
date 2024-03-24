class PokemonCheckbox{

    static all = []

    constructor(pokemon){
        this.pokemon = pokemon
        this.constructor.all.push(this)
        this.checked = false
    }

    static renderAll(form){
        dataManager.pokemons.forEach(pokemon => form.append(new PokemonCheckbox(pokemon).render()))
        this.markSavedPokemon()
    }

    static markSavedPokemon(){
        const ids = dataManager.savedPokemonIds
        this.all.forEach(checkbox => {
            if(checkbox.pokemon.number == ids[0]){
                checkbox.checked = true
                checkbox.renderContent()
                ids.shift()
            }
        })
    }

    static savePokemons(){
        const ids = this.all.filter(checkbox => checkbox.checked).map(checkbox => checkbox.pokemon.number)
        dataManager.savePokemons(ids)
    }

    render(){
        this.el = document.createElement("div")
        this.el.classList.add("card")
        this.el.addEventListener("click", this.handleClick)
        this.renderContent()
        return this.el
    }

    handleClick = () => {
        this.checked = !this.checked
        this.renderContent()
        this.constructor.savePokemons()
    }

    renderContent(){
        const {name, image, number} = this.pokemon
        if (this.checked) {
            this.el.classList.add("caught")
        } else {
            this.el.classList.remove("caught")
        }
        this.el.innerHTML = `<img alt=${name} src='${image}'/><h2>${number}: ${name}</h2>`
    }
}