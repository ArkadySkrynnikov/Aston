const context: Record<string, string> = {
    val: "val",
}

function log(string: string): void {
    console.log(`val: ${this.val}, string: ${string}`)
}

interface Function {
    bindPolyfill(obj: Record<any, any>, ...args: any[]): Function
}

Function.prototype.bindPolyfill = function(obj: any, ...args: any[]): Function {
    let fn = this;

    return function (...argsAfterContext: any[]) {
        const key = Date.now().toString() + Math.random().toString();

        obj[key] = fn;

        const res = obj[key](...args,...argsAfterContext);

        delete obj[key];

        return res;
    }
    // let fn = this;
    // return function (...argsAfterContext: any[]) {
    //     fn.apply(obj, [...args, ...argsAfterContext]);
    // };
};

log.bindPolyfill(context)("string")
log.bindPolyfill(context, "string")()
console.log(context)
