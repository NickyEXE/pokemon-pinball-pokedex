class LocationsContainer {
    render(){
        const main = document.querySelector("main") 
        main.innerHTML = `
        <center>This lists all Pokemon you haven't yet caught, by location. Click on a Pokemon to catch it. Caught pokemon will appear grayed out.</center>
        <div class='locations'>
            <center><h2 class="red">Red Table</h2></center>
            <div id="red" class="red"></div>
            <center><h2 class="blue">Blue Table</h2></center>
            <div id="blue" class="blue"></div>
        </div>`
        const redEl = document.getElementById("red")
        const blueEl = document.getElementById("blue")
        dataManager.redTableLocations.map(location => new Location(redEl, location).render())
        dataManager.blueTableLocations.map(location => new Location(blueEl, location).render())
    }
}