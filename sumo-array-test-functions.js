let Y = 'Y'
let O = 'O'
let S = 'S'
let K = 'K'

let rikishi = 


// foo is just a placeholder name of a function, you can put other functions in here and it will run the function on the [rikishi] array
function printReport(foo){
    console.log(foo(rikishi))
}

function totalYusho(array){
    let total = 0
    for(let item of array){
        total+= item.yusho
    }
    return `Total Yusho in dataset: ${total}`
}

function totalKinboshi(array){
    let total = 0
    for(let item of array){
        total+= item.kinboshi
    }
    return `Total Kinboshi in dataset: ${total}`
}

function getAllOzeki(array){
    let ozekiList = []
    for (item of array){
        if(item.highestRank === O){
            ozekiList.push(item.shikona)
        }
    } return `rikishi who have been Ozeki: ${ozekiList.join(', ')}`
}

function getAllYushoWinners(array){
    let yushoWinners = []
    let noYusho = []
    for (item of array){
        if(item.yusho >= 1){
            yushoWinners.push(item.shikona)
            
        } else if (item.yusho === 0){
            noYusho.push(item.shikona)
        } 
    } 
    return `rikishi who have won a Yusho: ${yushoWinners.join(', ')}`
}

function averageFSAki(array){
    let total = 0
    for (item of array){
        total+= item.fsAki
    }
   return `average FS score of all wrestlers =` + ((total / rikishi.length))
}

function listRikishiByFSAki(array){
    for (item of array){

    }
}



// number of Yusho in dataset
//printReport(totalYusho)

// // number of Kinboshi in dataset 
// printReport(totalKinboshi)

// // names of all rikishi with highestRank: O
// printReport(getAllOzeki)

// // names of all rikishi with yusho >= 1
// printReport(getAllYushoWinners)

// // average score of FSAki
// printReport(averageFSAki)

// logs rikishi name & fsAki
// rikishi.forEach(({ shikona, fsAki }) => console.log(`${shikona} - ${fsAki}`))

// sorts rikishi by fsAki and logs shikona and fsAki
// const sorted = rikishi.sort((a, b) => b.fsAki - a.fsAki)
// sorted.forEach(({ shikona, fsAki}) => console.log(`${shikona} - ${fsAki}`))

// list of wrestlers from [rikishi] array
// const wrestlerList = rikishi.map(item => item.shikona)




// let rikishi = [
//     {
//         shikona: 'Terunofuji',
//         rank: Y,
//         highestRank: Y,
//         yusho: 7,
//         kinboshi: 0,
//         fsAki: 5
//     },
//     {
//         shikona: 'Takakeisho',
//         rank: O,
//         highestRank: O,
//         yusho: 1,
//         kinboshi: 3,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Shodai',
//         rank: O,
//         highestRank: O,
//         yusho: 1,
//         kinboshi: 1,
//         fsAki: 4,
//     },
//     {
//         shikona: 'Tamawashi',
//         rank: 3,
//         highestRank: S,
//         yusho: 2,
//         kinboshi: 7,
//         fsAki: 40,
//     },
//     {
//         shikona: 'Mitakeumi',
//         rank: O,
//         highestRank: O,
//         yusho: 3,
//         kinboshi: 2,
//         fsAki: 4,
//     },
//     {
//         shikona: 'Wakatakakage',
//         rank: S,
//         highestRank: S,
//         yusho: 1,
//         kinboshi: 0,
//         fsAki: 18,
//     },
//     {
//         shikona: 'Hoshoryu',
//         rank: S,
//         highestRank: S,
//         yusho: 0,
//         kinboshi: 0,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Daieisho',
//         rank: S,
//         highestRank: S,
//         yusho: 1,
//         kinboshi: 3,
//         fsAki: 9,
//     },
//     {
//         shikona: 'Abi',
//         rank: K,
//         highestRank: S,
//         yusho: 0,
//         kinboshi: 3,
//         fsAki: 0
//     },
//     {
//         shikona: 'Ichinojo',
//         rank: K,
//         highestRank: S,
//         yusho: 1,
//         kinboshi: 8,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Kiribayama',
//         rank: K,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 0,
//         fsAki: 17,
//     },
//     {
//         shikona: 'Tobizaru',
//         rank: 1,
//         highestRank: 1,
//         yusho: 0,
//         kinboshi: 1,
//         fsAki: 26,
//     },
//     {
//         shikona: 'Midorifuji',
//         rank: 1,
//         highestRank: 1,
//         yusho: 0,
//         kinboshi: 0,
//         fsAki: 15,
//     },
//     {
//         shikona: 'Kotonowaka',
//         rank: 2,
//         highestRank: 2,
//         yusho: 0,
//         kinboshi: 0,
//         fsAki: 19,
//     },
//     {
//         shikona: 'Meisei',
//         rank: 2,
//         highestRank: S,
//         yusho: 0,
//         kinboshi: 0,
//         fsAki: 18,
//     }, 
//     {
//         shikona: 'Ura',
//         rank: 3,
//         highestRank: 1,
//         yusho: 0,
//         kinboshi: 2,
//         fsAki: 19,
//     }, 
//     {
//         shikona: 'Nishikigi',
//         rank: 4,
//         highestRank: 2,
//         yusho: 0,
//         kinboshi: 1,
//         fsAki: 9,
//     }, 
//     {
//         shikona: 'Takayasu',
//         rank: 4,
//         highestRank: O,
//         yusho: 0,
//         kinboshi: 5,
//         fsAki: 25,
//     },
//     {
//         shikona: 'Takarafuji',
//         rank: 5,
//         highestRank: S,
//         yusho: 0,
//         kinboshi: 3,
//         fsAki: 5,
//     },
//     {
//         shikona: 'Sadanoumi',
//         rank: 5,
//         highestRank: 1,
//         yusho: 0,
//         kinboshi: 1,
//         fsAki: 14,
//     },
//     {
//         shikona: 'Wakamotoharu',
//         rank: 6,
//         highestRank: 4,
//         yusho: 0,
//         kinboshi: 0,
//         fsAki: 15,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
//     {
//         shikona: 'Endo',
//         rank: 6,
//         highestRank: K,
//         yusho: 0,
//         kinboshi: 6,
//         fsAki: 10,
//     },
// ]