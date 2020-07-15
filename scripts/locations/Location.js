//converts location object into HTML rep

export const LocationAsHTML = (locationObj) => {
//figure out how to make links work
    return `
        <section class="location card">
            <div><img class="location__image" src="${locationObj.image}"/></div>
            <div class="location__name">${locationObj.name}</div>
            <div class="location__url" href="https://www.visitflorida.com/en-us/cities/key-west.html">${locationObj.link}</div>
            <div class="location__description">${locationObj.description}</div>
        </section>
    
    `
}