import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from '../api/api';
export const TodoList = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const fetchItems = async () => {
			const todos = await getTodos();
			setItems(todos);
		};
		fetchItems();
	}, []);

	return (
		<div className="container">
			<div className="mt-3">
				<h2>Todo List</h2>
				<table className="table table-striped mt-3">
					<thead>
						<tr>
							<th>Text</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{items.map(todo => {
							return (
								<tr key={todo._id}>
									<td>{todo.text}</td>
									<td>
										<Link to={`/${todo._id}`}>Edit</Link>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
