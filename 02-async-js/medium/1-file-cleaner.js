const fs = require('fs');

function removeExtraSpace(str) {
    const n = str.length;
    let res = "", idx = -1;

    for (let i = 0; i < n; i++) {
        if (str[i] != ' ') {
            res += str[i];
            ++idx;
        } else {
            if (idx !== -1 && res[idx] === ' ') {
                continue;
            } else {
                res += str[i]
                idx++;
            }
        }

    }
    return res;
}

function readData(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(data);
        });
    });
}

function writeData(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                reject(err);
            }
            resolve('success');
        })
    })
}

readData(`./sample-file.txt`)
    .then((data) => {
        data = removeExtraSpace(data);
        return data;
    }).then((data) => {
        writeData('./sample-file.txt', data);
    })
    .catch((err) => {
        console.log('catch chala?')
        console.log(err);
    })


