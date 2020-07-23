import {useQuotes} from "./QuoteProvider.js";
import {QuoteAsHTML} from "./Quote.js";


//function to iterate over quotes array and return HTML list

export const QuoteList = () => {
    
    const contentElement = document.querySelector(".left--page")
    const quotes = useQuotes()

    contentElement.innerHTML += `
        <article class="quotes">
            ${quotes.map(quote => QuoteAsHTML(quote))}
        </article>
    `

}