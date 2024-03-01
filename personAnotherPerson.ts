interface Object {
    logInfo(): void
}
const Person = {
    info: "info",
    greet: function() {
        console.log("Hello");
    }
};

function Person2(info: string) {
    this.info = info;
}

Person2.prototype.greet = function (){
    console.log("hello")
}

let person2 = new Person2("info 2")

function AnotherObject(info: string) {
    Person2.call(this, info)
}

AnotherObject.prototype = Object.create(Person2.prototype)

let anotherO = new AnotherObject("another Info")

Object.prototype.logInfo = function() {
    console.log(`logInfo ${this.info}`);
};

Person.logInfo()
Person.greet()

person2.logInfo()
person2.greet()

anotherO.logInfo()
anotherO.greet()