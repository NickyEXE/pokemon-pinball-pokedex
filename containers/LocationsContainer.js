class LocationsContainer {
    render(){
        const main = document.querySelector("main") 
        main.innerHTML = `
        <div class='locations'>
            <center><h1>Red Table</h1></center>
            <div id="red" class="red"></div>
            <center><h1>Blue Table</h1></center>
            <div id="blue" class="blue"></div>
        </div>`
        const redEl = document.getElementById("red")
        const blueEl = document.getElementById("blue")
        dataManager.redTableLocations.map(location => new Location(redEl, location).render())
        dataManager.blueTableLocations.map(location => new Location(blueEl, location).render())
    }
}