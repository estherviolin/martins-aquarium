//creates list HTML element for all tips

import {useTips} from "./TipDataProvider.js"
import {TipAsHTML} from "./Tip.js"

export const TipList = () => {

    const contentElement = document.querySelector(".right--page")

    //array of tips
    const tips = useTips()

    //HTML string
    // let tipHTMLReps = ""

    // for(const currentTipObj of tips) {
    //     tipHTMLReps += TipAsHTML(currentTipObj)
    // }

    contentElement.innerHTML += 
    `
    <aside class="tipSection">
        ${tips.map(currentTipObj => TipAsHTML(currentTipObj))}
    </aside>
    

    `
}