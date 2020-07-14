const fishCollection = [
    {
    name: "Sally",
    species: "swordfish",
    length: "3 m",
    location: "Atlantic, Pacific, Indian Oceans",
    diet: "pelagic fish",
    image: "./images/swordfish.jpg"
    },
    {
    name: "Zelda",
    species: "zebrafish",
    length: "3 cm",
    location: "South Asia",
    diet: "plankton, larvae, crustaceans",
    image: "./images/zebrafish.jpg"
    },
    {
    name: "Georgia",
    species: "guppy",
    length: "5 cm",
    location: "South America",
    diet: "algae, plants, larvae, minerals",
    image: "./images/guppy.jpg" 
    }
]

export const useFish = () => {
    return fishCollection
}

export const addFish = (fish) => {
    fishCollection.push(fish)
}