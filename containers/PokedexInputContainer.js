class PokedexInputContainer {
    render = () => {
        const main = document.querySelector("main") 
        main.innerHTML = "<div class='flex'></div>"
        this.div = main.querySelector("div")
        PokemonCheckbox.renderAll(this.div)
    }
}