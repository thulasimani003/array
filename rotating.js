function rotateRight(arr, n) {
    const length = arr.length;
    n = n % length;
    return arr.slice(-n).concat(arr.slice(0, -n));
}

const array = [1, 2, 3, 4, 5];
const rotatedArray = rotateRight(array, 2);

console.log(rotatedArray);
