import axios from 'axios';
export const getTodos = async () => {
	try {
		const todos = await axios.get('http://localhost:4000/');
		return todos.data;
	} catch (e) {
		console.log(e);
	}
};

export const createTodo = async todo => {
	try {
		await axios.post('http://localhost:4000/create', todo);
	} catch (e) {
		console.log(e);
	}
};

export const getEditTodo = async id => {
	try {
		const todo = await axios.get(`http://localhost:4000/${id}`);
		return todo.data;
	} catch (e) {
		console.log(e);
	}
};

export const updateTodo = async (todo, id) => {
	try {
		await axios.put(`http://localhost:4000/${id}`, todo);
	} catch (e) {
		console.log(e);
	}
};

export const deleteTodo = async id => {
	try {
		await axios.delete(`http://localhost:4000/${id}`);
	} catch (e) {
		console.log(e);
	}
};
