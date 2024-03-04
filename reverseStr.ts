function reverseStr(str: string): string {
    return str.split("").reverse().join("")
    // return str.split("").reduceRight((acc,e) => acc + e, "")
}

console.log(reverseStr("str"))
