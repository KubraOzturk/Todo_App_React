import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { isLoginReducer } from './todoSlice';

export default configureStore({
	reducer: {
		todos: todoReducer,
		
	},
});
