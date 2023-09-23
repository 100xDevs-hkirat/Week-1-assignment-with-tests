const fs = require('fs')

// function that cleans the data
function clean(data) {
    let n = data.split(" ")
    let b = [];
    for (let i = 0; i < n.length; i++) {
        if (n[i] != '') {
            b.push(n[i])
        }
    }
    let final = b.join(' ')
    return final
}


// this function finally prints to the close
// if file has been written or 
// error occured
function dataWritten(err) {
    if (err) {
        console.error(err);
    }
    console.log("file has been cleaned and written")
}


// this function first cleans the data and then pass it
// on to the write function to write it into the file
function fileRead(err, data) {
    if (err) {
        console.error(err)
        return;
    }
    // insted of logging the data, we pass the data to the clear() function
    let cleanedData = clean(data)
    fs.writeFile('c.txt', cleanedData, 'utf-8', dataWritten)
}


// this is the first function beign exectued
fs.readFile('c.txt', 'utf-8', fileRead)






