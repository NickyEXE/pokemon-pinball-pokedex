class PokedexInputContainer {
    render = () => {
        const main = document.querySelector("main") 
        main.innerHTML = `<center>Click on a Pokemon to catch it. Caught pokemon will appear grayed out.</center>
        <center>Saved Pokemon will stay saved on page refresh, assuming you don't clear local data.</center>
        <div class='flex pokedex'></div>`
        this.div = main.querySelector("div")
        PokemonCheckbox.all = []
        PokemonCheckbox.renderAll(this.div)
    }
}