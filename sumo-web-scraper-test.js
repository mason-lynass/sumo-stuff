const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()





let sumoDBUrl =  'https://sumodb.sumogames.de/Rikishi_basho.aspx?r=5944&b=202209'
let wrestlerName = "something"

const tamawashi = 'https://sumodb.sumogames.de/Rikishi_basho.aspx?r=5944&b=202209'
const hoshoryu = 'https://sumodb.sumogames.de/Rikishi_basho.aspx?r=12451&b=202209'

let rikishi = hoshoryu
const hoshi=[]

// just a random rikishi's torikumi right now, eventually use this variable as a parameter of a function 
// function _ (sumoDBUrl) {find the name of the rikishi in the document}
function getRikishiName (sumoDBUrl) {
    axios(sumoDBUrl)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
              

            const getClass = $('.rb_shikona', html)
            const getSpan = getClass.find('span')
            const rikishiName = getSpan.textContent
            console.log(rikishiName)
            // hoshi.push({
            //     rikishiName
            // })
            // console.log(hoshi)
})
}



getRikishiName(sumoDBUrl)


// axios(rikishi)
//     .then(response => {
//         const html = response.data
//         const $ = cheerio.load(html)
//         const hoshi = []

//         $('.rb_torikumi', html).each(function() {
//         const wL = $(this).find('tr').each(function() {
//             const TD = $(this).find('td')
//             if ($(TD).hasClass('rb-day')) {
//                 console.log('wtf')
//                 //$(TD).find('img').attr('src')   
//             } 
            
//             })
//         hoshi.push({
//             wL
//         })
//         })
//         console.log(hoshi)

//     }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))