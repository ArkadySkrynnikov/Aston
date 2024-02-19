function getLength(something: any) : void {
    if (something?.hasOwnProperty(length) || something?.size) {
        return console.log(something.length || something.size)
    }
    return console.log(0)
}

getLength(null)
getLength(undefined)
getLength({})
getLength(new Boolean())
getLength(new Array(0))
getLength(new String("a"))
getLength([1,2])
getLength(new Array<number>(3).fill(1))

getLength(new Map<string, number>([
    ["0", 0],
    ["1", 1],
    ["2", 2],
    ["3", 3]
]))

getLength(new Set<number>([1,2,3,4,5]))