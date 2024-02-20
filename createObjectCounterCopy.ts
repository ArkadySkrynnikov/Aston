const counter = {
    x: {
        first: 1,
        second: 2,
        value: {
            value: 3
        }
    },
    y: 4,
    z: 5,
};

const counterCopy1 = Object.assign({},counter);

const counterCopy2 = {...counter};

const counterCopy3 = JSON.parse(JSON.stringify(counter))

const counterCopy4 = structuredClone(counter);