//array of quote objects
const quotes = [
    {
        author: "Kurt Cobain",
        text: "It's okay to eat fish because they don't have any feelings."
    },
    {
        author: "Albert Einstein",
        text: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid."
    }


]

//function to return a copy of the array

export const useQuotes = () => {
    return quotes.slice()
}