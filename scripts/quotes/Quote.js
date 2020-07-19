// function to convert object into HTML

export const QuoteAsHTML = (quoteObject) => {
    return `
        <section class="quote card">
            <div class="quote__text">${quoteObject.text}</div>
            <div class="quote__author">${quoteObject.author}</div>
        </section>
    `
}