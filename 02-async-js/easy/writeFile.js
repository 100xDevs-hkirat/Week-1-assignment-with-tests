const fs = require('fs').promises;

const content = 'Pickle Rick!';

fs.writeFile('rick.txt', content).then(() =>
  console.log('Content written to the file.')
);
