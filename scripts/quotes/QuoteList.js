import {useQuotes} from "./QuoteProvider.js";
import {QuoteAsHTML} from "./Quote.js";

//function to iterate over quotes array and return HTML list

export const QuoteList = () => {
    const contentElement = document.querySelector(".left--page")
    const quotes = useQuotes()

    let quoteListHTML = ""

    for(const quote of quotes){
        quoteListHTML += QuoteAsHTML(quote)
    }

    contentElement.innerHTML += `
        <article class="quotes">
            ${quoteListHTML}
        </article>
    `

}