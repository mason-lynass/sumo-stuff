
// defining variables as form elements
const newShikona = document.querySelector('#shikona')
const newImg = document.querySelector('#img')
const newRank = document.querySelector('#rank')
const newHR = document.querySelector('#highestRank')
const newYusho = document.querySelector('#yusho')
const newKinboshi = document.querySelector('#kinboshi')
const newFSAki = document.querySelector('#fsAki')
const formSubmit = document.querySelector('#submit')

const inputForm = document.querySelector('form')

const formData = {
    shikona: newShikona,
    img: newImg,
    rank: newRank,
    highestrank: newHR,
    yusho: newYusho,
    kinboshi: newKinboshi,
    fsAki: newFSAki
} 

// configuration object
const config = {
    method: "POST",
    headers: {
        "Content-Type": "Application/JSON",
        "Accept" : "Application/JSON",
    },
    body: JSON.stringify(formData),
}

// //////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {

// event listeners

// sending the form to wrestlerList.json
inputForm.addEventListener('submit', () => {
    e.preventDefault();
    renderOneRikishi(formData)
    postOneRikishi(formData)
})

// function postOneRikishi(rikishiObject){
//     console.log(JSON.stringify(rikishiObject))
// }

    
//     fetch('http://localhost:3000/wrestlers', config)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
// })

// notifies form submission
formSubmit.addEventListener('click', (e) => {
    e.preventDefault
    console.log('form submitted!')
})


// event handlers

function renderOneRikishi(rikishi){
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
    <div class='content'>
        <div class='card-title'>
            <h2>${rikishi.shikona}</h2>
            <img src="${rikishi.img}">
        </div>
        <p>current rank: ${rikishi.rank}</p>
        <p>highest rank: ${rikishi.highestrank}</p>
        <p>career Yusho: ${rikishi.yusho}</p>
        <p>career kinboshi: ${rikishi.kinboshi}</p>
        <p>fantasy sumo points last basho: ${rikishi.fsAki}</p>
    </div>
    `
    document.querySelector('#addedRikishiList').appendChild(card)
}

function getAllRikishi(){
    fetch('http://localhost:3000/wrestlers')
    .then(resp => resp.json())
    .then(wrestlers => wrestlers.forEach(rikishi => renderOneRikishi(rikishi)))
}

function initialize(){
    getAllRikishi()
}

initialize()
})