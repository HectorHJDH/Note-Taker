const fs = require('fs');
const path = require('path');

// function to create a new note and add it to db.json file
function createNewNote(body, notesArray) {
  const newNote = body;
  notesArray.push(newNote);
  // Using fs to write to the db.json file to add the new note to the array
  fs.writeFileSync(path.join(__dirname, "../db/db.json"),
    JSON.stringify({db_notes: notesArray}, null, 2)
  );
  return newNote;
};

function updateDb(id, notesArray) {
  const deletedNote = id;
  // Loop through the array to find the note with the matching id and remove it
  for (let i = 0; i < notesArray.length; i++) {
    // If the id of the note in the array matches the id of the note to be deleted, remove it
    if (deletedNote === notesArray[i].id) {
      notesArray.splice(i, 1);
      // Using fs to write to the db.json file to remove the deleted note from the array
      fs.writeFileSync(path.join(__dirname, "../db/db.json"),
        JSON.stringify({db_notes: notesArray}, null, 2), err => {
          if (err) {
            throw err;
          }
        });
    }
  }
}

module.exports = { createNewNote, updateDb }; 