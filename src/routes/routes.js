const express = require('express');

const router = express.Router();

const Controller = require('../controllers/controllers');
const controller = new Controller();

router.get('/', controller.renderHome)

router.get('/tasks', controller.getAll);

router.post('/tasks', controller.newsTask);

router.post('/tasks/delete', controller.deleteTaskByName);

module.exports= router;