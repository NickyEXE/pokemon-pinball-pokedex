class pokemonCheckbox{
    constructor(pokemon){
        this.pokemon = pokemon
    }
    render(){
        const el = document.createElement("div")
        el.classList.add("pokemonCheckbox")
        el.innerHTML = `<input name="pokemonInput" type="checkbox" value="${this.pokemon.number}"/>
        <label for="pokemonInput">${this.pokemon.number} - ${this.pokemon.name}</label>`
        return el
    }
}