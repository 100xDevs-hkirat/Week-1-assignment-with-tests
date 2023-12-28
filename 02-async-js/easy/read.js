const fs = require('fs')

fs.readFile('1-counter.md', 'utf8', (error, data) => {
    if (error) {
        console.error('Error:', error)
    } else {
        console.log('File contents:', data)
    }
});
