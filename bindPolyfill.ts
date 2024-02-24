const context: Record<string, string> = {
    val: "val",
}

function log(string: string): void {
    console.log(`val: ${this.val}, string: ${string}`)
}

interface Function {
    bindPolyfill(obj: Record<any, any>, ...args: any[]): Function;
}

Function.prototype.bindPolyfill = function(obj: any, ...args: any[]): Function {
    let fn = this;
    return function (...argsAfterContext: any[]) {
        fn.apply(obj, [...args, ...argsAfterContext]);
    };
};

log.bindPolyfill(context)("string")
log.bindPolyfill(context, "string")()
