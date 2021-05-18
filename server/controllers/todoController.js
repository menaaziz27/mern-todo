const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
	try {
		const todos = await Todo.find({});
		return res.send(todos);
	} catch (e) {
		return res.status(500).send(e);
	}
};

exports.createTodo = async (req, res) => {
	try {
		const todo = await Todo.create(req.body);
		return res.json(todo);
	} catch (e) {
		return res.send(e);
	}
};

exports.getEditTodo = async (req, res) => {
	const id = req.params.id;
	try {
		const todo = await Todo.findById(id);
		if (!todo) {
			return res.status(404).send();
		}
		res.json(todo);
	} catch (e) {
		return res.status(500).send(e);
	}
};

exports.updateTodo = async (req, res) => {
	const id = req.params.id;
	try {
		const todo = await Todo.findByIdAndUpdate(id, { text: req.body.text });
		if (!todo) {
			return res.status(404).send('no todo found');
		}
		return res.json(todo);
	} catch (e) {
		return res.status(500).send(e);
	}
};

exports.deleteTodo = async (req, res) => {
	const id = req.params.id;
	try {
		const todo = await Todo.findOneAndDelete({ _id: id });
		if (!todo) {
			return res.status(404).send('no todo found');
		}
		return res.json(todo);
	} catch (e) {
		return res.status(500).send(e);
	}
};
