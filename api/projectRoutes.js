const express = require('express');
const projDB = require('../data/helpers/projectModel');
const cors = require('cors');

const router = express.Router();

router.use(express.json());
router.use(cors());

router.get('/', async (req, res) => {
    try {
        let response = await projDB.get();
        res.status(200).json(response);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'The projects could not be accessed from the database' });
    }
});

router.get('/:id/actionlist', async (req, res) => {
    try {
        let resp = await projDB.getProjectActions(req.params.id);
        res.status(200).json(resp);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Error accessing list of actions for project.' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let response = await projDB.get(id);

        response ? res.status(200).json(response) : res.status(404).json({ message: 'ID not found.' });
    } catch (e) {
        console.dir(e);
        res.status(500).json({ error: 'There was an error accessing the project from the database.' });
    }
});

router.post('/', async (req, res) => {
    try {
        let response = await projDB.insert(req.body);
        res.status(202).json(response);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Error adding project.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let deleteCount = await projDB.remove(req.params.id);
        res.status(200).json(deleteCount);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Error deleting user from database.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        let findId = await projDB.get(req.params.id);
        if (findId === null) {
            res.status(404).json({ message: 'ID not found.' });
        }
        let response = await projDB.update(req.params.id, req.body);
        res.status(200).json(response);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Error updating project in database.' });
    }
});

module.exports = router;
