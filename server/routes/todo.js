const express = require('express');
const router = express.Router();

const {
	getTodos,
	createTodo,
	getEditTodo,
	updateTodo,
	deleteTodo,
} = require('../controllers/todoController');

router.get('/:id', getEditTodo);
router.put('/:id', updateTodo);
router.get('/', getTodos);
router.post('/create', createTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
