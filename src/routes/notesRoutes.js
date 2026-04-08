import { Router } from "express";
import { celebrate } from "celebrate";
import { getAllNotes, getNoteById, createNote, deleteNote, updateNote, } from "../controllers/notesController.js";
import { getAllNotesSchema, noteIdSchema, createNoteSchema, updateNoteSchema } from "../validations/notesValidation.js";

const router = Router();

router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);
router.post('/notes', createNote);
router.delete('/notes/:noteId', deleteNote);
router.patch('/notes/:noteId', updateNote);

router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
router.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
router.post('/notes', celebrate(createNoteSchema), createNote);
router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

export default router;
