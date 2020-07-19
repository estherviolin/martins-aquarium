//holds raw location data

const arrayOfLocations = [

    {
        image: "./images/keywest.jpeg",
        name: "Key West",
        link:"https://www.visitflorida.com/en-us/cities/key-west.html",
        description: "Key West, the southernmost point in the United States, is famous for watersports, lively nightlife, beaches, historic sites and its pastel, conch-style architechture."
    },

    {
        image: "./images/tioman.jpeg",
        name: "Tioman Island",
        link:"https://divezone.net/travel/tioman-island",
        description: "Tioman is the most popular island on the eastern side of the Malaysian Peninsula. The island is especially known for its wonderful diving and snorkeling possibilities."
    },

    {
        image: "./images/cebaco.jpg",
        name: "Cebaco Island, Panama",
        link:"https://www.journeyera.com/cebaco-island-panama/",
        description: "Cebaco Island is located in the province of Veraguas, the Gulf of Montijo, and is part of the buffer zone of Coiba Island National Park. The island is over 8000 hectares (19768.2 acres) and it is the third largest island in Panama (after Coiba Island and Isla del Rey, respectively)."
    }

]

export const useLocations = () => {

    return arrayOfLocations.slice()

}

//not using 
export const addLocation = (location) => {

    arrayOfLocations.push(location)
}




