const express = require('express');
const path = require('path');
const api = require('./public/assets/js/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
    );

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
    );

app.get('/api/notes', (req, res) => {
    res.json(api);
}
);

app.post('/api/notes', (req, res) => {
    api.push(req.body);
    res.json(api);
}
);

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    api.splice(id, 1);
    res.json(api);
}
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);

//   };
//
//   const handleNoteDelete = (e) => {
//     // prevents the click listener for the list from being called when the button inside of it is clicked
//     e.stopPropagation();
//
//     const note = e.target;
//     const noteId = JSON.parse(note.parentElement.getAttribute('data-note')).id;
//
//     if (activeNote.id === noteId) {
//       activeNote = {};
//     }
//
//     deleteNote(noteId).then(() => {
//       getAndRenderNotes();
//       renderActiveNote();
//     });
//   };
//
