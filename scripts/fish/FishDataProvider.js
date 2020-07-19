const fishCollection = [
    {
    name: "Sally",
    species: "swordfish",
    length: 4,
    location: "Atlantic, Pacific, Indian Oceans",
    diet: "pelagic fish",
    image: "./images/swordfish.jpg"
    },
    {
    name: "Zelda",
    species: "zebrafish",
    length: 3,
    location: "South Asia",
    diet: "plankton, larvae, crustaceans",
    image: "./images/zebrafish.jpg"
    },
    {
    name: "Georgia",
    species: "guppy",
    length: 5,
    location: "South America",
    diet: "algae, plants, larvae, minerals",
    image: "./images/guppy.jpg" 
    }
]
//function to return copy of array
export const useFish = () => {
    return fishCollection.slice()
}

//function to return new array of only holy fish
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const theFish of fishCollection) {
        if (theFish.length % 3 === 0) {
            holyFish.push (theFish)
        }

    }

    return holyFish
}
//function to return new array of only soldier fish
export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const theFish of fishCollection) {
        if (theFish.length % 5 === 0 && theFish.length % 3 !== 0) {
            soldiers.push(theFish)
        }
    }
    return soldiers
}

//function to return new array of only regular fish
export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const theFish of fishCollection) {
    if (theFish.length % 5 !== 0 && theFish.length % 3 !== 0 ) {
        regularFish.push(theFish)
    }
    
    }
    return regularFish
}

