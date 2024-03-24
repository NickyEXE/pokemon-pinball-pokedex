class Location {
    constructor(root, location){
        this.root = root
        this.location = location
    }

    get pokemonCards(){
        return dataManager.outstandingPokemonAtLocation(`${this.root.id}${"Table"}`, this.location)
    }

    render(){
        const h3 = document.createElement("h3")
        h3.innerText = this.location
        const el = document.createElement("div")
        el.classList.add("flex")
        el.classList.add("location")
        this.pokemonCards.forEach(pc => {
            el.append(pc.render())
        })
        this.root.append(h3, el)
    }
}