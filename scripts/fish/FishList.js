// this module creates the list of fish to add to the DOM
import {mostHolyFish, soldierFish, nonHolyFish} from "./FishDataProvider.js"
import {FishAsHTML} from "./Fish.js"

const contentElement = document.querySelector(".left--page")

//function that adds fish to DOM
const addFishtoDOM = (theArrayOfFish) => {
    
    contentElement.innerHTML += `
        <article class="fishSection">
            ${theArrayOfFish.map(currentFishObj => FishAsHTML(currentFishObj))}
        </article>
    
    `
}


export const FishList = () => {
    
    //array of holy fish to be used as argument in addFishtoDom function
    const holyFish = mostHolyFish()
    addFishtoDOM(holyFish)

    const soldiers = soldierFish()
    addFishtoDOM(soldiers)

    const regulars = nonHolyFish()
    addFishtoDOM(regulars)
   

}
   
