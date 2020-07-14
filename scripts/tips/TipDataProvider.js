//manages raw data

const arrayOfTips = [

    {
        tip: "Maintain proper pH levels"
    },

    {
        tip: "Inspect filter"
    },

    {
        tip: "Clean away algae"
    },

    {
        tip: "Replace 25% of tank with clean water"
    },

    {
        tip: "Stabilize temperature"
    }

]

export const useTips = () => {

    return arrayOfTips.slice()

}

export const addTip = (tip) => {

    arrayOfTips.push(tip)
}