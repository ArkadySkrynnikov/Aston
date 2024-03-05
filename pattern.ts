function pattern(n: number){
    if (n === 1) return 1
    let output = "\n"

    for (let i = 1 ; i <= n ; i++){
        let arr = Array(i).fill(0).map((_,i) => (i + 1) % 10).join("")

        let arr2 = arr.split("").reverse().join("").slice(1)

        output += " ".repeat(n-i) + arr + arr2 + " ".repeat(n-i) + '\n'
    }
    return output + output.split("\n").reverse().slice(2).join("\n")
}

console.log(pattern(5))