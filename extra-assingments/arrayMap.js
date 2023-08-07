function mapArray(arr, callback) {
    function xyz(element, index, array) {
        return callback(arr[index]);
    }

    return arr.map(xyz);
}

testArr = [1, 2, 3, 4];
function add1(element) {
    return element = 1;

}

newArr = mapArray(tesstArr, add1)
console.log(newArr);
// Excpect : newArr = [2, 3, 4, 5]