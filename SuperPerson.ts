class SuperPerson {
    public name: string;
    constructor(name: string) {
        this.name = name
    }

    get getName() {
        return this.name;
    }

    set setName(val: string) {
        if (val.length < 3) {
            console.log("мало букв")
        } else {
            this.name = val;
        }
    }
}

class SuperPersonChild extends SuperPerson {
    constructor(childName: string) {
        super(childName);
    }
}

const FirstSuperPerson = new SuperPerson("dad name");
const ChildOfSuperPerson = new SuperPersonChild("son name");

console.log(FirstSuperPerson.getName)
FirstSuperPerson.setName = "mo";
console.log(FirstSuperPerson.getName)

ChildOfSuperPerson.setName = "daughter name";
console.log(ChildOfSuperPerson.getName);