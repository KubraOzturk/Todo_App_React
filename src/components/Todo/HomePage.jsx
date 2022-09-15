import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import TotalCompleteItems from './TotalCompleteItems';

function HomePage(props) {
  return (

     	<div className='container bg-white p-4 mt-2'>
			<h1>My Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
  );
}

export default HomePage;
