//creates list HTML element for all tips

import {useTips} from "./TipDataProvider.js"
import {TipAsHTML} from "./Tip.js"

export const TipList = () => {

    const contentElement = document.querySelector(".right--page")

    const tips = useTips()

    let tipHTMLReps = ""

    for(const currentTipObj of tips) {
        tipHTMLReps += TipAsHTML(currentTipObj)
    }

    contentElement.innerHTML += 
    `
    <aside class="tipSection">
        ${tipHTMLReps}
    </aside>
    

    `
}