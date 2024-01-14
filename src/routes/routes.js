const express = require('express');

const router = express.Router();

const Controller = require('../controllers/controllers');
const controller = new Controller();

router.get('/', controller.renderHome)
router.get('/task', controller.getAll);
router.post('/task', controller.newsTask);
router.post('/task/delete', controller.deleteTaskByName);

module.exports= router;