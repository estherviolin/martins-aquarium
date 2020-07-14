// this module creates the list of fish to add to the DOM
import {useFish} from "./FishDataProvider.js"
import {FishAsHTML} from "./Fish.js"




export const FishList = () => {
    //gets referense to element on the DOM
    const contentElement = document.querySelector(".left--page")
    
    //collection of fish from FishDataProvider
    const fishes = useFish()


    let fishHTMLRep = ""
    for(const currentFishObj of fishes) {
        fishHTMLRep += FishAsHTML(currentFishObj)
    }

    //updating HTML of Dom element with FishList HTML
    contentElement.innerHTML += `
        <article class="fishSection">
            ${fishHTMLRep}
        </article>
    
    `
}