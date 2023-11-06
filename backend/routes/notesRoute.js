const express = require('express');
const { fetchNotes, fetchNote, createNote, updateNote, deleteNote } = require('../controllers/notesController');

const router = express.Router();

router.get('/notes', fetchNotes)

router.get('/note/:id', fetchNote)

router.post('/note', createNote)

router.put('/note/:id', updateNote)

router.delete('/note/:id', deleteNote)

module.exports = router;