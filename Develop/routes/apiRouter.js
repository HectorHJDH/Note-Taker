const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { db_notes } = require('../db/db.json');

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    let response = db_notes;
    res.json(response);
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, db_notes);
    res.json(newNote);
});

// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete.
router.delete('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

module.exports = router;
