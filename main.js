const cards = document.querySelector('.cards')
const btn = document.querySelector("#btnSearch")
btn.addEventListener("click", searchFunction)

const sortBynameBtn = document.getElementById("sortByName")
sortBynameBtn.addEventListener("click", sortByName)

// const sortByRatings = document.getElementById("sortByRatings")

// sortByRatings.addEventListener("change", sortByRatingHandler)


let mainData = null;
let selectedData = null;

(async () => {
    const res = await fetch("./data/data.json");
    const jsondata = await res.json();
    mainData = jsondata
    selectedData = jsondata
})()


const getCard = (cardDetails) => {
    const card = document.createElement('div')
    card.className = "card"

    const img = document.createElement('img')
    img.src = cardDetails.imageUrl

    const title = document.createElement('div')
    const titleText = document.createTextNode(cardDetails.name)
    title.appendChild(titleText)

    const ratings = document.createElement('div')
    const ratingsText = document.createTextNode("Ratings : " + cardDetails.ratings)
    ratings.appendChild(ratingsText)

    const eta = document.createElement('div')
    eta.className = "eta"
    const etaText = document.createTextNode("ETA : " + cardDetails.eta)
    eta.appendChild(etaText)

    const tags = document.createElement("div")
    tags.className = "tags"
    const tagsText = document.createTextNode(`tags: ${cardDetails.tags.toString()}`)
    tags.appendChild(tagsText)

    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(ratings)
    card.appendChild(eta)
    card.appendChild(tags)
    return card
}

function sortByRatingHandler(e) {
    let ratings = Number(e)

    let filteredData = ratings == 0 ? mainData : mainData.filter(d => d.ratings == ratings);
    setData(filteredData)
}

function sortByName() {
    let newData = mainData.sort((a, b) => a.name > b.name ? 1 : -1)
    setData(newData)
}

function setData(data) {
    cards.innerHTML = "";
    data.map(food => cards.appendChild(getCard(food)))
}

function searchFunction(e) {

    console.log("clicked ");
    e.preventDefault()
}

setTimeout(() => {
    setData(selectedData)

}, 2000);

