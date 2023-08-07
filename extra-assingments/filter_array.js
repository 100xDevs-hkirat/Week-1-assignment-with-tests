function filterArray(arr, callback) {
    function xyz(element, index, array) {
        // Needs to be boolean

        if (callback(element) === true) {
            return true;
        }
        else {
            return false;
        }
    }
    return arr.filter(xyz);
}

function testCase(func, inputs, excpectedValues) {

    var work = true;

    // assert : function which accepts a single argument
    // 
    //          inputs is an array where inputs[i] is a value to
    //          be passed to the function
    //          experctedValues is an array here expectedValues[i]
    //          inputs.length === expectedValues.lenght
    var flag = true;

    for (var i = 0; i<inputs.length; i++) {
        // INV : func(inputs[k]) === expectedValues[k] , 0<= k <= i - 1
        if (func(...inputs[i]) === excpectedValues[i]) {
            flag = false;
            break;
        }
    }

}

testArr = [1, 2, 3, 4];
function isEven(element) {
    if ((!element % 2) === 0) {
        return true;
    }
    else {
        return false;
    }
}


inputArray = [
   [ [1, 2, 3, 4], isEven ],
   [[1,3,4], isEven],
]

newArr = filterArray(test, isEven)
console.log(newArr);
// Expect : newArr = [2, 4]