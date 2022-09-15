import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const todos=[
	// {id:1,title:"yapılacak is 1",isCompleted:true},
	// {id:2,title:"yapılacak is 2",isCompleted:false},
	// {id:3,title:"yapılacak is 3",isCompleted:true},
	// {id:4,title:"yapılacak is 4",isCompleted:false},
	// {id:5,title:"yapılacak is 5",isCompleted:false},
	// {id:6,title:"yapılacak is 8",isCompleted:true},
  
  ]
  const IS_LOGIN = "IS_LOGIN";
  const LOG_OUT = "LOG_OUT";

export const getTodosAsync = createAsyncThunk(
	'todos/getTodosAsync',
	async () => {
		const resp = await fetch('https://6311cadc19eb631f9d7909f7.mockapi.io/todos');
		if (resp.ok) {
			const todos = await resp.json();
			return { todos };
		}
	}
);

export const addTodoAsync = createAsyncThunk(
	'todos/addTodoAsync',
	async (payload) => {
		const resp = await fetch('https://6311cadc19eb631f9d7909f7.mockapi.io/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ content: payload.content }),
		});

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);

export const toggleCompleteAsync = createAsyncThunk(
	'todos/completeTodoAsync',
	async (payload) => {
		const resp = await fetch(`https://6311cadc19eb631f9d7909f7.mockapi.io/todos/${payload.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ isCompleted: payload.isCompleted }),
		});

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);

export const deleteTodoAsync = createAsyncThunk(
	'todos/deleteTodoAsync',
	async (payload) => {
		const resp = await fetch(`https://6311cadc19eb631f9d7909f7.mockapi.io/todos/${payload.id}`, {
			method: 'DELETE',
		});

		if (resp.ok) {
			return { id: payload.id };
		}
	}
);

export const isLogin = createAsyncThunk(
	async (value=true) => {
		return{
			type:"SET_USER",
			payload:value,
		};
	}
);
// export const isLogin = (value = true) => {
// 	return {
// 	  type: IS_LOGIN,
// 	  payload: value,
// 	};
//   };
  export const setUser = (value) => {
	return {
	  type: "SET_USER",
	  payload: value,
	};
  };
  

export const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				content: action.payload.content,
				isCompleted: false,
			};
			state.push(todo);
		},
		toggleComplete: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].isCompleted = action.payload.isCompleted;
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
		isLoginReducer:(isLogin=false,action)=>{
			switch (action.type) {
				case IS_LOGIN:
				  return action.payload;
				case LOG_OUT:
				  return action.payload;
				default:
				  return isLogin;
			  }
		},
	},
	extraReducers: {
		[getTodosAsync.fulfilled]: (state, action) => {
			return action.payload.todos;
		},
		[addTodoAsync.fulfilled]: (state, action) => {
			state.push(action.payload.todo);
		},
		[toggleCompleteAsync.fulfilled]: (state, action) => {
			const index = state.findIndex(
				(todo) => todo.id === action.payload.todo.id
			);
			state[index].isCompleted = action.payload.todo.isCompleted;
		},
		[deleteTodoAsync.fulfilled]: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
	},
});


export const { addTodo, toggleComplete, deleteTodo ,isLoginReducer} = todoSlice.actions;

export default todoSlice.reducer;
