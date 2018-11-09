const express = require('express');
const actionDB = require('../data/helpers/actionModel');
const cors = require('cors');

const router = express.Router();

router.use(express.json());
router.use(cors());

router.get('/', async (req, res) => {
    try {
        let resp = await actionDB.get();
        res.status(200).json(resp);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'The actions could not be accessed from the database.' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let resp = await actionDB.get(id);
        if (resp) {
            res.status(200).json(resp);
        } else {
            res.status(404).json({ message: 'ID not found.' });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'The action could not be accessed from the database.' });
    }
});

router.post('/', async (req, res) => {
    try {
        let resp = await actionDB.insert(req.body);
        res.status(202).json(resp);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Error adding action.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let resp = await actionDB.remove(req.params.id);
        !resp === null ? res.status(200).json(resp) : res.status(404).json({ message: 'Action not found.' });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Action cannot be deleted from the database.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        let resp = await actionDB.update(req.params.id, req.body);
        res.status(202).json(resp);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Action could not be updated.' });
    }
});

module.exports = router;
