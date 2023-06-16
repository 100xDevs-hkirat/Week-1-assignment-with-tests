const fs = require('fs');

const notesPath = '/home/pallavi/Documents/COHORT/Week-1-assignment-with-tests/02-async-js/easy/notes.txt';
const textToAppend = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae facere, aperiam quaerat, quidem fugit doloremque sint fugiat quibusdam cupiditate eveniet molestias iste ipsum unde dolor. Recusandae totam aliquam aperiam, nemo, harum consequuntur porro eos corporis laborum odit reiciendis tempora. Officia repellendus et nemo magnam animi tempora a dolores nobis.';

fs.writeFile(notesPath, textToAppend, err=>{
    if(err){
        console.log(err);
        return;
    }
});