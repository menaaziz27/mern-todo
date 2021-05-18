import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { TodoForm } from './TodoForm';
import { getEditTodo, updateTodo, deleteTodo } from '../api/api';

export const TodoEdit = () => {
	const history = useHistory();
	let match = useRouteMatch();
	const [todo, setTodo] = useState();

	useEffect(() => {
		const fetchTodo = async () => {
			const todo = await getEditTodo(match.params.id);
			setTodo(todo);
		};
		fetchTodo();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSubmit = async data => {
		await updateTodo(data, match.params.id);
		history.push('/');
	};

	const onDelete = async () => {
		await deleteTodo(match.params.id);
		history.push('/');
	};

	return todo ? (
		<div className="container">
			<div className="mt-3">
				<h3>Edit Todo Item</h3>
				<TodoForm onSubmit={onSubmit} onDelete={onDelete} todo={todo} />
			</div>
		</div>
	) : (
		<div>Looding ...</div>
	);
};
