const fs = require('fs');

const content = 'These were added so ignore this line';

fs.writeFile('1-counter.md', content, 'utf8', (error) => {
    if (error) {
        console.error('Error:', error);
    }
});
