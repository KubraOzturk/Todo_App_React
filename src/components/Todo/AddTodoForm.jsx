import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if(event.target[0].value.length.toString()>3){
		if (value) {
			dispatch(
				addTodoAsync({
					content: value,
				})
			
			);
			event.target[0].value="";
		}
	}
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Add Todo</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;
