class MainContainer{
    render = () => {
        const main = document.querySelector("main") 
        new PokedexInputContainer().render()
    }
}