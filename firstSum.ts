//1
function firstSum(arr: number[], total: number) {
    let sortedArr = arr.toSorted()
    const map = new Map<number, number>();

    for (let i = 0; i < sortedArr.length; i++) {
        let difference = total - sortedArr[i];
        map.set(sortedArr[i], difference)
        let ans = map.get(sortedArr[i]) + sortedArr[i]
        if (ans === total && sortedArr.includes(difference)) return [sortedArr[i], difference]
    }
    return [];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
console.log(firstSum(arr, total));

//2
//Обход по массиву имеет сложность O(n), где n — количество элементов массива.