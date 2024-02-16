function getLength(something: any) : number {
    if (something?.hasOwnProperty(length)) return something.length
    return 0
}

console.log(getLength(null))
console.log(getLength(undefined))
console.log(getLength({}))
console.log(getLength(new Boolean()))
console.log(getLength(new Array(0)))
console.log(getLength(new String("a")))
console.log(getLength([1,2]))
console.log(getLength(new Array<number>(3).fill(1)))