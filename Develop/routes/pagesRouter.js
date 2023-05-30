const path = require("path");
const router = require('express').Router();

// The route / should return the index.html file
router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// The route /notes should return the notes.html file
router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = router;