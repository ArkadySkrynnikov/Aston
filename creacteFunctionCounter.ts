function makeCounter1() {

}

const makeCounter2 = function() {

}

const makeCounter3 = function makeCounter3dot1() {

}

const makeCounter4 = () => {

}

function MakeCounter5(counter: number) {
    this.counter = counter

    this.whatIsCount = function() {
        return this.counter
    }
}

(function (){
    return console.log("MakeCounter6")
})();

function makeCounter7(start: number) {
    let counter = start
    return function (){
        counter++
    }
}

let incCount = makeCounter7(1)

console.log(incCount())
console.log(incCount())
console.log(incCount())
console.log(incCount())
console.log(incCount())