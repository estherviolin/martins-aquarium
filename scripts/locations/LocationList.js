//creates entire HTML list element for all locations

import {useLocations} from "./LocationDataProvider.js"
import {LocationAsHTML} from "./Location.js"

export const LocationList = () => {
    //gets referense to elemnt on the DOM
    const contentElement = document.querySelector(".left--page")

    const locations = useLocations()

    // let locationHTMLReps = ""

    // for(const currentLocationObj of locations) {

    //     locationHTMLReps += LocationAsHTML(currentLocationObj)
    // }

    contentElement.innerHTML += 
    `
    <article class="locations">
        ${locations.map(currentLocationObj => LocationAsHTML(currentLocationObj))}
    </article>
    `
}