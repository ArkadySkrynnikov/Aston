const obj: Record<string, string> = {
    item: "some value",
}

function logger(): void {
    console.log(`I output only external context: ${this.item}`)
}

logger.bind(obj,[])()
logger.apply(obj,[])
logger.call(obj)