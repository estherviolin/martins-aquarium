//converts location object into HTML rep

export const LocationAsHTML = (locationObj) => {
//figure out how to make links work
    return `
        <section class="location card">
            <div><img class="location__image" src="${locationObj.image}"/></div>
            <div class="location__name">${locationObj.name}</div>
            <a class="location__url" href="${locationObj.link}">more info</a>
            <div class="location__description">${locationObj.description}</div>
        </section>
    
    `
}