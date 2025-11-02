// accepting inputs from user 
let originalHeritage = +prompt("Enter the Heritage Amount")
let isWifeAlive = confirm("Is the wife Alive?")
let numberOfSons = +prompt("Enter the Number of Sons") 
let numberOfDaughters = +prompt("Enter the Number of Daughters") 

//processing
console.log(`Original Heritage = ${originalHeritage}`)
let wifeShare = isWifeAlive * (1/8) * originalHeritage
console.log(`Wife's Share = ${wifeShare}`)
let remainedHeritage = originalHeritage - wifeShare
console.log(`Remained Heritage = ${remainedHeritage}`)

console.log(`Number of Sons = ${numberOfSons}`)
console.log(`Number of Daughters = ${numberOfDaughters}`)
let sonsFactor = numberOfSons * 2 
let daughtersFactor = numberOfDaughters * 1 
let divisionFactor = sonsFactor + daughtersFactor 
let numberOfchildren = numberOfSons + numberOfDaughters 
let sonsShare = (sonsFactor / divisionFactor) * remainedHeritage 
console.log(`whole Heritage for Sons = ${sonsShare}`)
let eachSonShare = sonsShare / numberOfSons
let daughtersShare = (daughtersFactor / divisionFactor) * remainedHeritage 
console.log(`whole Heritage for Daughters = ${daughtersShare}`)
let eachDaughterShare = daughtersShare / numberOfDaughters
console.log(`Son's Share = ${eachSonShare}`)
console.log(`Daughter's Share = ${eachDaughterShare}`)

