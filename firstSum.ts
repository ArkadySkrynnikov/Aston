//1
function firstSum(arr: number[], total: number) {
    let sortedArr = arr.toSorted()
    for (let i = 0; i < sortedArr.length; i++) {
        for (let j = i + 1; j < sortedArr.length; j++) {
            if (sortedArr[i] + sortedArr[j] === total) {
                return [sortedArr[i], sortedArr[j]];
            }
        }
    }
    return [];
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
console.log(firstSum(arr, total))

//2
//Сложность алгоритма O(n^2) так как используются 2 вложенных цикла, которые обходят массив.
//Обход по массиву имеет сложность O(n), где n — количество элементов массива