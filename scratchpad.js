let processRow = (row) => {
    const name = row.children[2].querySelector("a").innerText.split("\n")[0]
    const locationData = {redTable: [], blueTable: [], evolutionOf: ""}
    const locationValues = row.children[4].innerText.split("Blue Table").map(loc => loc.replace("Red Table", "").replace("\n", ""))
    if (locationValues[0].includes("Evolve")){
        locationData.evolutionOf = locationValues[0].replace("Evolve ", "")
    } else {
        if (!locationValues[1]){
            locationValues.push("")
        }
        locationData.redTable = locationValues[0].split("\n").filter(item => !!item)
        locationData.blueTable = locationValues[1].split("\n").filter(item => !!item)
    }
    return {name, locations: locationData}
}