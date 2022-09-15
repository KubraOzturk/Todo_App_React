import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync } from '../../redux/todoSlice';

const TodoItem = ({ id, content, isCompleted }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleCompleteAsync({ id, isCompleted: !isCompleted }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id }));
	};

	return (
		<li className={`list-group-item ${isCompleted && 'list-group-item-success' }`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center justify-content-between'>
					<input
						type='checkbox'
						className='mr-9 mx-2'
						defaultChecked={isCompleted}
						onClick={handleCheckboxClick}
					></input>
					{content}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>
					Delete
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
