class mainContainer{
    render = () => {
        const main = document.querySelector("main") 
        main.innerHTML = "<form></form>"
        this.form = main.querySelector("form")
        pokemons.forEach(pokemon => this.form.appendChild(new pokemonCheckbox(pokemon).render()))
        this.form.innerHTML += '<input type="submit" value="Log Pokemon">'
        this.form.addEventListener("submit", this.submitHandler)
    }

    submitHandler = (e) => {
        e.preventDefault()
        pokemons = pokemons.map((pokemon, i) => pokemon = {...pokemon, selected: this.form.querySelectorAll("input")[i].checked})
        console.log(pokemons)
        // const selectedInputs = [...this.form.querySelectorAll("input")].filter(item => item.checked)
        // const selectedPokemons = selectedInputs.map(item => pokemons.find(pokemon => pokemon.number == item.value))
        // console.log(selectedPokemons)
    }
}