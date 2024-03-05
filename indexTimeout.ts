// const indexTimeout = (arr: number[]): void => {
//     for (let i = 0; i < arr.length; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, 3000);
//     }
// }

const indexTimeout = (arr: number[]) : void => {
    for (let i = 0; i < arr.length; i++) {
        timeoutLog(i)
    }
}

function timeoutLog(i: number){
    setTimeout(()=>{
        console.log(i)
    },3000*i)
}

indexTimeout([-2, -1, 0, 1, 2])
