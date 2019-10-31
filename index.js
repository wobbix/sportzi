const { Tzi } = require('tzi')
let animal = new Tzi(27)
//console.log(animal)
let deck = Tzi.deck
//console.log(deck)
let range = Tzi.rangeArray(1,60)
//console.log(range)
let entries = range.map(i => {
    let entry = new Tzi(i)
    return [entry.natural, entry.name, entry.duo, entry.opposite]
}) //[1, Wood Rat, 2, 30]
console.log(entries)