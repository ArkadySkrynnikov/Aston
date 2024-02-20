const counterObjEmpty = {};

const counterObj1: Record<string, number> = {"1": 1};

const counterObj2 = new Object({"1": 1});

const counterObj3 = Object.create({},{
    x: {
        value: "x",
        //writable – если true, свойство можно изменить, иначе оно только для чтения.
        writable: true,

        //enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
        enumerable: true,

        //configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
        configurable: true,

        //get — функция, которая будет вызвана при запросе к свойству
        // get: function(): string {
        //     return this.value
        // },
        //writable может конфликтовать c set get

        //set — функция, которая будет вызвана при записи свойства
        // set: function(v: string): void {
        //     this.value = v;
        // }
        // для нового свойства необходимо явно указывать все флаги, для которых значение true
    }
})

// Object.defineProperty(counterObj3, "x", {
//     value: "23213",
//     configurable: true
// })
// Cannot redefine property: x

const counterObj4 = Object.assign({}, counterObj3, {"y": "2"}, {"z": "3"})

class counterClass {
    public firstName: string;
    public lastName: string;
    constructor(firstName: string, lastName : string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const counterObj5 = new counterClass("arkadi", "skrynnikov");