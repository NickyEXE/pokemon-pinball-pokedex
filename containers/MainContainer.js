class MainContainer{
    render = () => {
        const main = document.querySelector("main")
        this.pokedexButton = document.getElementById("pokedex")
        this.locationsButton = document.getElementById("locations")
        this.addEventListeners()
        this.selectPokedex()
    }

    addEventListeners = () => {
        this.pokedexButton.addEventListener("click", this.selectPokedex)
        this.locationsButton.addEventListener("click", this.selectLocations)

    }

    selectPokedex = () => {
        this.pokedexButton.classList.add("selected")
        this.locationsButton.classList.remove("selected")
        new PokedexInputContainer().render()
    }

    selectLocations = () => {
        this.pokedexButton.classList.remove("selected")
        this.locationsButton.classList.add("selected")
        new LocationsContainer().render()
    }
}