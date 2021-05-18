import React from 'react';
import { useForm } from 'react-hook-form';

export const TodoForm = ({ todo, onSubmit, onDelete }) => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			text: todo ? todo.text : '',
		},
	});

	const submitHandler = handleSubmit(data => {
		onSubmit(data);
	});

	const onDeleteHandler = () => {
		onDelete();
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="form-group">
				<label htmlFor="text">Text:</label>
				<input
					className="form-control"
					type="text"
					name="text"
					{...register('text', { required: true })}
					id="text"
				/>
			</div>
			<div className="form-group">
				<button type="submit" className="btn btn-primary">
					Save Todo
				</button>
				<button onClick={onDeleteHandler} className="btn btn-danger m-lg-3">
					Delete Todo
				</button>
			</div>
		</form>
	);
};
