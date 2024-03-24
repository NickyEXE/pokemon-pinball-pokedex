class MainContainer{
    render = () => {
        const main = document.querySelector("main") 
        main.innerHTML = "<form></form>"
        this.form = main.querySelector("form")
        PokemonCheckbox.renderAll(this.form)
        const submit = document.createElement("input")
        submit.setAttribute("type", "submit")
        submit.setAttribute("value", "Log Pokemon")
        this.form.appendChild(submit)
        this.form.addEventListener("submit", this.submitHandler)
    }

    submitHandler = (e) => {
        e.preventDefault()
        const pokemonIds = [...this.form.querySelectorAll("input")].filter(input => input.checked).map(input => input.value)
        dataManager.savePokemons(pokemonIds)
        
        // const selectedInputs = [...this.form.querySelectorAll("input")].filter(item => item.checked)
        // const selectedPokemons = selectedInputs.map(item => pokemons.find(pokemon => pokemon.number == item.value))
        // console.log(selectedPokemons)
    }
}