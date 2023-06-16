const fs = require('fs');

fs.readFile('Ankith.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File contents:', data);
    }
});

// Expensive operation
const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

const result = fibonacci(40);
console.log('Result of the expensive operation:', result);
