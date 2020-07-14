// this module creates the list of fish to add to the DOM
import {useFish} from "./FishDataProvider.js"




export const FishList = () => {
    const contentElement = document.querySelector(".left--page")
    const fishes = useFish()

    contentElement.innerHTML += `
        <article class="fishList">
        All the fish go here!
        </article>
    
    `
}