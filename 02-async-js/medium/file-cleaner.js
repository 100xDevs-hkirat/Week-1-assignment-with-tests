const fs = require('fs').promises;

fs.readFile('cleanFile.txt', { encoding: 'utf-8' }).then((contents) => {
  let data = contents.replace(/\s+/g, ' ').trim();

  fs.writeFile('cleanFile.txt', data, 'utf-8').then(() =>
    console.log('File cleaned successfully.')
  );
});
