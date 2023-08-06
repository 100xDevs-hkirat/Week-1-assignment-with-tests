const fs = required('fs');

function removeExtraSpace(str) {
    newStr = str.replace
}

function series() {
    fs.readFile('a.txt', 'utf-8', waitCallback);
}

function waitCallback(err, data) {

    function writeCallback() {
        fs.writeFile('b.txt', data, 'utf-8', removeSpace())
    }

    function removeSpace(err) {
        newData = removeExtraSpace(data);

        fs.write('a.txt', newData, 'utf-8', deleteA);
    }

    setTimeout(writeCallback, 3000);
}

function deleteA(err) {
    fs.write('a.txt', '', 'Utf-8', deleteB);
}

function deleteB(err) {
    fs.writeFile('b.txt', '', 'Utf-8', finalCallback);
}

function finalCallback(err) {
    console.log()
}

series()